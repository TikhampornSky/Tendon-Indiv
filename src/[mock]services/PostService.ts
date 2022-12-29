//import {useState} from 'react'
import axios from "axios";
import { injectable } from "inversify";
import { makeAutoObservable } from "mobx"
import Post from "../[mock]Interface/Post";

@injectable()
class PostService {
    private postStatus = 0

    constructor() {
        makeAutoObservable(this)
        this.postStatus = 0
    }

    async addPost(postNew: Post) {
        await axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: postNew.title,
                body: postNew.body,
                userId: postNew.userId,
                id: postNew.id
            })
        .then((response) => {
            this.postStatus = response.status
        })
        .catch((err) => {
            // console.log(err.message)
        });

        return this.postStatus
    };

    public getPostStatus() {
        return this.postStatus
    }

}

export default PostService