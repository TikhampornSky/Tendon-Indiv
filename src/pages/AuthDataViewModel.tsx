// import {useEffect, useState} from "react";
import { makeAutoObservable } from "mobx"

import { Container } from "inversify";
import TYPES, { User } from '../interfaces/TendonType'
import AuthService from "../service/services_user/auth_service";

export interface ShowDataIViewModel {
    getPostsDataShow: () => User[]
    getViewPosts: () => User[]
}

class AuthShowDataViewModel{
    private AuthService: AuthService 
    private user: User
    private status: Number
    private message: string

    constructor(container: Container) {
        makeAutoObservable(this)
        this.AuthService = container.get<AuthService>(TYPES.AuthService)
        this.user = {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
        this.status = 0
        this.message = ''
    }
    
    async getUserInformation(id: string, token: string) {
        const tmpPost =  await this.AuthService.getUserByID(id, token)
        this.status = this.AuthService.getStatus()
        console.log("Model: ", this.status)
        if (this.status === 200) {
            this.user = tmpPost
            return this.user
        } else if (this.status === 401) {
            this.message = "Unauthorized"
        } else if (this.status === 404) {
            console.log("ppp")
            this.message = "Doesn't have this ID"
        } else if (this.status === 409) {
            this.message = "Expired Token"
        } else {
            this.message = "Internal Error"
        }
        return {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
    }

    public getUser() {
        return this.user
    }

    public getStatus() {
        return this.status
    }

    public getMessage() {
        return this.message
    }

}

export default AuthShowDataViewModel