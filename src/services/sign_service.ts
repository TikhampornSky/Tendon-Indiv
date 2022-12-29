import axios from 'axios'
import { makeAutoObservable } from "mobx"
import { injectable } from 'inversify'
import { User } from '../interfaces/TendonType'

@injectable()
class SignService {
    response: User
    status: number

    constructor() {
        makeAutoObservable(this)
        this.response = {} as User
        this.status = 0
    }

    async signUp(body: User) {
        await axios.post('http://24.199.72.217:8080/api/v1/user/sign-up', {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: body.password
            })
        .then((response) => {
            this.status = response.status
            this.response = response.data
        })
        .catch((err) => {
            this.status = Object(err)["response"]["request"]["status"]
            this.response = {} as User
        });

        return this.response
    }

    async signIn(body: User) {
        await axios.post('http://24.199.72.217:8080/api/v1/user/sign-in', {
                email: body.email,
                password: body.password
            })
        .then((response) => {
            this.status = response.status
            this.response = response.data
        })
        .catch((err) => {
            this.status = Object(err)["response"]["request"]["status"]
            this.response = {} as User
        });

        return this.response
    }

    async signOut(token: string) {                     // Unfinish
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.post('http://24.199.72.217:8080/api/v1/user/sign-out', config)
        .then((response) => {
            this.status = response.status
        })
        .catch((err) => {
            this.status = Object(err)["response"]["request"]["status"]
        });

        return this.status
    }

    public getStatus() {
        return this.status
    }

    public getResponse() {
        return this.response
    }

}

export default SignService