//import {useState} from 'react'
import { injectable } from "inversify";
import { makeAutoObservable } from "mobx"
import Post from "../interfaces/Post";

@injectable()
class PostService {
    private postStatus = 0

    constructor() {
        makeAutoObservable(this)
        this.postStatus = 0
    }

    async addPost(postNew: Post) {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: postNew.title,
                body: postNew.body,
                userId: postNew.userId,
                id: postNew.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (response.ok) {
                // console.log("Status is ", response.status)
                this.postStatus = response.status
            }
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