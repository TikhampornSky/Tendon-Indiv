import Post from "../interfaces/Post";
import { makeAutoObservable } from "mobx"
import DeleteService from "../services/DeleteService";

class DeleteDataViewModel {     
    private deleteService: DeleteService 
    private deleteStatus: Number

    constructor(deleteService: DeleteService) {
        makeAutoObservable(this)
        this.deleteService = deleteService;
        this.deleteStatus = 0
    }

    async deleteData(id: Number) {
        const status =  await this.deleteService.DeleteData(id)
        this.deleteStatus = status
    }

    public getDeleteStatus() {
        return this.deleteStatus
    }
}

export default DeleteDataViewModel