import { makeAutoObservable } from "mobx"
import axios from 'axios'

class DeleteService {
    private deleteStatus = 0

    constructor() {
        makeAutoObservable(this)
        this.deleteStatus = 0
    }

    async DeleteData(id: Number) {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            this.deleteStatus = res.status
        })
        return this.deleteStatus
    }

    public GetDeleteStatus() {
        return this.deleteStatus
    }
}
export default DeleteService