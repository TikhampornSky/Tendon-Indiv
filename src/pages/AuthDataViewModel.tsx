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
        const tmpValue =  await this.AuthService.getUserByID(id, token)
        this.status = this.AuthService.getStatus()
        if (this.status === 200) {
            this.user = tmpValue
            return this.user
        } else {
            this.handleErrorStatus()
        }
        return {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
    }

    async updateUserInformation(id: string, token: string, body: User) {
        const tmpValue = await this.AuthService.updateUser(id, token, body)
        this.status = this.AuthService.getStatus()
        if (this.status === 200) {
            this.user = tmpValue
            return this.user
        } else {
            this.handleErrorStatus()
        }
        return {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''}
    }

    async deleteUserInformation(id: string, token: string) {
        const status =  await this.AuthService.deleteUser(id, token)
        this.status = status
        if (this.status === 200) {
            return this.status 
        } else {
            this.handleErrorStatus()
            return this.status
        }
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

    private handleErrorStatus() {
        if (this.status === 400) {
            this.message = "some field not exit"
        } else if (this.status === 401) {
            this.message = "Unauthorized"
        } else if (this.status === 404) {
            this.message = "Doesn't have this ID"
        } else if (this.status === 406) {
            this.message = "wrong email or password"
        } else if (this.status === 409) {
            this.message = "Expired Token"
        } else {
            this.message = "Internal Error"
        }
    }

}

export default AuthShowDataViewModel