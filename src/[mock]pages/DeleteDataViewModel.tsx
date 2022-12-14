import { makeAutoObservable } from "mobx"
import DeleteService from "../[mock]services/DeleteService";

import { Container } from "inversify";
import TYPES from "../[mock]Interface/inverse-Type";

class DeleteDataViewModel {     
    private deleteService: DeleteService 
    private deleteStatus: Number

    constructor(container:Container) {
        makeAutoObservable(this)
        this.deleteService = container.get<DeleteService>(TYPES.DeleteService)
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