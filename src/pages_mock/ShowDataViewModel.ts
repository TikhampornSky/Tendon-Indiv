// import {useEffect, useState} from "react";
import Post from "../interfaces/Post";
import { makeAutoObservable } from "mobx"
import GetService from "../services_mock/GetService";

import { Container } from "inversify";
import TYPES from '../interfaces/inverse-Type'

export interface ShowDataIViewModel {
    getPostsDataShow: () => Post[]
    getViewPosts: () => Post[]
}

class ShowDataViewModel{               //การเขียนจะคล้ายๆกับตอนเขียนคลาสของ Service
    private getService: GetService 
    private posts: Post[]

    constructor(container: Container) {
        makeAutoObservable(this)
        this.getService = container.get<GetService>(TYPES.GetService)
        this.posts = [];
    }
    
    async getPostsDataShow() {
        const tmpPost =  await this.getService.getPosts()
        this.posts = tmpPost
        return this.posts
    }

    public getViewPosts() {
        return this.posts
    }

}

export default ShowDataViewModel