import axios from 'axios'
import { makeAutoObservable } from "mobx"
import { injectable } from 'inversify'
import { User } from '../../interfaces/TendonType'

@injectable()
class AuthService {
    id:string
    firstName:string
    lastName:string
    email:string
    updateAt:string
    response: User

    constructor() {
        makeAutoObservable(this)
        this.id = ""
        this.firstName = ""
        this.lastName = ""
        this.email = ""
        this.updateAt = ""
        this.response = {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: ''}
    }


    async getUserByID(id: string, token: string){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const tmp_response =  await axios.get<User>('http://24.199.72.217:8080/api/v1/auth/users/'+id, config)
        this.response = tmp_response.data
        return this.response
    }
}

export default AuthService