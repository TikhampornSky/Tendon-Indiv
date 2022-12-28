import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";
import AuthShowDataViewModel from './AuthDataViewModel'

import { useTendonContainer } from "../service/container";
import { User } from "../interfaces/TendonType";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZW5kb25CYWNrZW5kIiwic3ViIjoiNjNhNmZhZDZlNjgwODE0MjJkNjJlZDI0IiwiZXhwIjoxNjcyMjI1Mzg4LCJuYmYiOjE2NzIyMTgxODgsImlhdCI6MTY3MjIxODE4OCwianRpIjoiNjNhYzA2NGNlNjgwODE0MjJkNjJlZDQxIn0.zda__305SJAidt8_skoCI5damJ9kfXjD2FQUaN1H1Xc"
const user_id = "63ab15fce68081422d62ed30"      //63ab15fce68081422d62ed30
const user_id_tmp = "63ac0de8e68081422d62ed51"

export const AuthGetHandle = observer(() => {              

    const [userGetView, setUserGetView] = useState<User>({type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''})  
    const [message, setMessage] = useState<String>("")
    const viewModel = new AuthShowDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getUserInformation(user_id, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserGetView(viewModel.getUser())
        setMessage(viewModel.getMessage())
    })

    if (userGetView.id === '') {
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

export const AuthUpdateHandle = observer(() => {              

    const [userView, setUserView] = useState<User>({type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: '', password: ''})  
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
        role: ""
    }
    const viewModel = new AuthShowDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.updateUserInformation(user_id, token, body)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserView(viewModel.getUser())
        setMessage(viewModel.getMessage())
    })

    if (userView.id === '') {
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

export const AuthDeleteHandle = observer(() => { 

    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new AuthShowDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteUserInformation(user_id_tmp, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setDeleteStatus(viewModel.getStatus())
        setMessage(viewModel.getMessage())
    })

    // console.log("Delete Status: ", deleteStatus)
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