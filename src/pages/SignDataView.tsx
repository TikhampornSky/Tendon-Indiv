import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";

import { useTendonContainer } from "../service/container";
import SignShowDataViewModel from "./SignDataViewModel";
import { User } from "../interfaces/TendonType";

export var user_id_new: string;         // For Testing purpose

export const SignUpHandle = observer(() => {

    const [userView, setUserView] = useState<User>({} as User)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
    var body: User = {
        firstName: "tmpTmp",
        lastName: "tmpppp",
        email: "tmp1234@email.com",
        password: "12345678",
        id: "",
        createAt: "",
        updateAt: "",
        type: "",
        role: "",
        accessToken: ''
    }
    const viewModel = new SignShowDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.signUp(body)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserView(viewModel.getUser())
        setMessage(viewModel.getMessage())
        setStatus(viewModel.getStatus())
    })

    if (status === 201) {
        return (
            <div>
                <p> [ Sign-Up ] </p>
                <DataView viewModel={ userView } />
            </div>              
        )
    } else {
        return (
            <div>
                <p> "Sign-up ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

export const SignInHandle = observer(() => {

    const [userView, setUserView] = useState<User>({} as User)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
    var body: User = {
        firstName: "",
        lastName: "",
        email: "t@email.com",
        password: "12345678",
        id: "",
        createAt: "",
        updateAt: "",
        type: "",
        role: "",
        accessToken: ''
    }
    const viewModel = new SignShowDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.signIn(body)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserView(viewModel.getUser())
        setMessage(viewModel.getMessage())
        setStatus(viewModel.getStatus())
    })

    if (status === 200) {
        return (
            <div>
                <p> [ Sign-In ] </p>
                <DataView viewModel={ userView } />
            </div>              
        )
    } else {
        return (
            <div>
                <p> "Sign-In ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

interface ShowDataViewProps {
    viewModel: User
}

const DataView = observer(( {viewModel}: ShowDataViewProps) => {
    user_id_new = viewModel.id
    console.log(user_id_new)
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