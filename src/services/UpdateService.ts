import { action, makeAutoObservable, observable } from "mobx"
import axios from 'axios'
import Post from '../interfaces/Post'

class UpdateService {
    private updateStatus = 0

    constructor() {
        makeAutoObservable(this)
        this.updateStatus = 0
    }

    async updateData(id:Number, updatePost:Post) {
        //const res = await axios.put('https://httpbin.org/put', { hello: 'world' });
        //setstatusUPDATE(res.status)
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: updatePost.title,
            body: updatePost.body,
            userId: updatePost.userId,
        })
        .then((res) => {
            // console.log("UpdateStatus is ", res.status)
            this.updateStatus = res.status
        })
        return this.updateStatus
    }

    public getUpdateStatus() {
        return this.updateStatus
    }

}

export default UpdateService