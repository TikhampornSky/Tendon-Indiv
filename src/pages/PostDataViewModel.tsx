import Post from "../interfaces/Post";
import { makeAutoObservable } from "mobx"
import PostService from "../services/PostService";

class PostDataViewModel{     
    private postService: PostService 
    private posts: Post                  // Data to send
    private postStatus = 0

    constructor(postService:PostService, newPost:Post) {
        makeAutoObservable(this)
        this.postService = postService;
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