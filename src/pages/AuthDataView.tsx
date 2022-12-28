import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";
import AuthShowDataViewModel from './AuthDataViewModel'

import { useTendonContainer } from "../service/container";
import { User } from "../interfaces/TendonType";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZW5kb25CYWNrZW5kIiwic3ViIjoiNjNhNmZhZDZlNjgwODE0MjJkNjJlZDI0IiwiZXhwIjoxNjcyMjEzMzY2LCJuYmYiOjE2NzIyMDYxNjYsImlhdCI6MTY3MjIwNjE2NiwianRpIjoiNjNhYmQ3NTZlNjgwODE0MjJkNjJlZDNiIn0.aR9huLrB0unrlZ0V56CKQRijAGkZVV4F1g35OE5ghCg"
const user_id = "63ab15fce68081422d62ed30"      //63ab15fce68081422d62ed30

const AuthGetHandle = observer(() => {              

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

export default AuthGetHandle