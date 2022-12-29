import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";
import UserDataViewModel from './UserViewModel'

import { useTendonContainer } from "../services/container";
import { User } from "../interfaces/TendonType";
import { token } from "../_demo_setting";
import { user_id, user_id_delete } from "../_demo_setting";

export const UserGetHandle = observer(() => {              

    const [userGetView, setUserGetView] = useState<User>({} as User)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new UserDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getUserInformation(user_id, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserGetView(viewModel.getUser())
        setMessage(viewModel.getMessage())
    })

    if (userGetView.id === undefined) {
        return (
            <div>
                <p> "GET ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
            <p> [AUTH] Get Zone</p>
            <AuthView viewModel={userGetView}/>
        </div>              
    )
})

export const UserUpdateHandle = observer(() => {              

    const [userView, setUserView] = useState<User>({} as User)  
    const [message, setMessage] = useState<String>("")
    var body: User = {
        firstName: "Tontan",
        lastName: "Tomato",
        email: "t@email.com",
        password: "12345678",
        id: "",
        createAt: "",
        updateAt: "",
        type: "",
        role: "",
        accessToken: ''
    }
    const viewModel = new UserDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.updateUserInformation(user_id, token, body)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserView(viewModel.getUser())
        setMessage(viewModel.getMessage())
    })

    if (userView.id === undefined) {
        return (
            <div>
                <p> "UPDATE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
            <p> [AUTH] Update Zone </p>
            <AuthView viewModel={userView}/>
        </div>              
    )
})

export const UserDeleteHandle = observer(() => { 

    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new UserDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteUserInformation(user_id_delete, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setDeleteStatus(viewModel.getStatus())
        setMessage(viewModel.getMessage())
    })

    if (deleteStatus === 200) {
        return (
            <div>
                <p> [AUTH] Delete Zone </p>
                <p> Delete Complete </p>
            </div>              
        )
    } else {
        return (
            <div>
                <p> "DELETE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})


interface ShowDataViewProps {
    viewModel: User
}

const AuthView = observer(({viewModel}: ShowDataViewProps) => {
    return (
        <div>
                <div key= {viewModel.id}>
                    <p>{viewModel.id} { '-->' } {viewModel.email}</p>
                    <li> {viewModel.firstName} </li>
                    <li> {viewModel.lastName} </li>
                    <li> {viewModel.updateAt} </li>
                <hr></hr>
            </div>
        </div>
    )
})