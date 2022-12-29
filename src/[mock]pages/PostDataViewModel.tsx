import Post from "../[mock]Interface/Post";
import { makeAutoObservable } from "mobx"
import PostService from "../[mock]services/PostService";

import { Container } from "inversify";
import TYPES from "../[mock]Interface/inverse-Type";

class PostDataViewModel{     
    private postService: PostService 
    private posts: Post                  // Data to send
    private postStatus = 0

    constructor(container:Container, newPost:Post) {
        makeAutoObservable(this)
        this.postService = container.get<PostService>(TYPES.PostService)
        this.posts = newPost;
    }

    async postData() {
        const status =  await this.postService.addPost(this.posts)
        this.postStatus = status
    }

    public getPostStatus() {
        return this.postStatus
    }
}

export default PostDataViewModel