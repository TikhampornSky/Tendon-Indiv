import Post from "../interfaces/Post";
import { makeAutoObservable } from "mobx"
import UpdateService from "../services/UpdateService";

class UpdateDataViewModel {     
    private updateService: UpdateService 
    private posts: Post                  // Data to send
    private updateStatus: Number

    constructor(updateService:UpdateService, newPost:Post) {
        makeAutoObservable(this)
        this.updateService = updateService;
        this.posts = newPost;
        this.updateStatus = 0
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