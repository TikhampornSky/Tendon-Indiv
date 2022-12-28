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
    status: number

    constructor() {
        makeAutoObservable(this)
        this.id = ""
        this.firstName = ""
        this.lastName = ""
        this.email = ""
        this.updateAt = ""
        this.response = {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
        this.status = 0
    }


    async getUserByID(id: string, token: string){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        let tmp_response: any
        try { 
            tmp_response =  await axios.get<any>(`http://24.199.72.217:8080/api/v1/auth/users/${id}`, config)
            this.status = tmp_response.status
            this.response = tmp_response.data
        } catch (err) {
            this.status = Object(err)["response"]["request"]["status"]
            this.response = {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
        }
        return this.response
    }

    async updateUser(id: string, token: string, body: User) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        try { 
            await axios.patch(`http://24.199.72.217:8080/api/v1/auth/users/${id}`, {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: body.password
            }, config)
            .then((res) => {
                this.status = res.status
                this.response = res.data
            })
        } catch (err) {
            this.status = Object(err)["response"]["request"]["status"]
            // console.log(this.status)
            this.response = {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
        }
        return this.response
    }

    public getStatus() {
        return this.status
    }
}

export default AuthService