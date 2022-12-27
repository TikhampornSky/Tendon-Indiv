import Post from "../interfaces/Post";
import { makeAutoObservable } from "mobx"
import UpdateService from "../services_mock/UpdateService";

import { Container } from "inversify";
import TYPES from '../interfaces/inverse-Type'

class UpdateDataViewModel {     
    private updateService: UpdateService 
    private posts: Post                  // Data to send
    private updateStatus: Number

    // constructor(updateService:UpdateService, newPost:Post) {
    //     makeAutoObservable(this)
    //     this.updateService = updateService;
    //     this.posts = newPost;
    //     this.updateStatus = 0
    // }

    constructor(container: Container, newPost:Post) {
        makeAutoObservable(this)
        this.updateService = container.get<UpdateService>(TYPES.UpdateService)
        this.updateStatus = this.updateService.getUpdateStatus()
        this.posts = newPost
    }

    async updateData(id: Number) {
        const status =  await this.updateService.updateData(id, this.posts)
        this.updateStatus = status
    }

    public getUpdateStatus() {
        return this.updateStatus
    }
}

export default UpdateDataViewModel