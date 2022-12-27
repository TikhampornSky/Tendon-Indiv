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

    constructor(container: Container) {
        makeAutoObservable(this)
        this.AuthService = container.get<AuthService>(TYPES.AuthService)
        this.user = {type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: ''};
    }
    
    async getUserInformation(id: string, token: string) {
        const tmpPost =  await this.AuthService.getUserByID(id, token)
        this.user = tmpPost
        return this.user
    }

    public getUser() {
        return this.user
    }

}

export default AuthShowDataViewModel