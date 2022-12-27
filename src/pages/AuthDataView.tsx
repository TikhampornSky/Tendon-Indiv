import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";
import AuthShowDataViewModel from './AuthDataViewModel'

import { useTendonContainer } from "../service/container";
import { User } from "../interfaces/TendonType";


const AuthHandle = observer(() => {              
    //ส่งไปหา dataViewModel
    const [userView, setUserView] = useState<User>({type: '', id:'', firstName: '', lastName: '', email: '', role: '', createAt: '', updateAt: ''})  
    const viewModel = new AuthShowDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getUserInformation("63ab15fce68081422d62ed30", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZW5kb25CYWNrZW5kIiwic3ViIjoiNjNhNmZhZDZlNjgwODE0MjJkNjJlZDI0IiwiZXhwIjoxNjcyMTY0NzY2LCJuYmYiOjE2NzIxNTc1NjYsImlhdCI6MTY3MjE1NzU2NiwianRpIjoiNjNhYjE5N2VlNjgwODE0MjJkNjJlZDM3In0.x3UQV55Jo93wXleSaE8X7NfdIszMNChiquWNvH2ADmg")
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setUserView(viewModel.getUser())
    })

    return (
        <div>
            <AuthView viewModel={userView}/>
        </div>              
    )
})

interface ShowDataViewProps {
    viewModel: User
}

const AuthView = observer(({viewModel}: ShowDataViewProps) => {           //ส่งจาก dataViewModel มาแสดงผล
    return (
        <div>
                <div key= {viewModel.id}>
                    <p>{viewModel.id} { '-->' } {viewModel.email}</p>
                    <li> {viewModel.firstName} </li>
                    <li> {viewModel.lastName} </li>
                    <li> {viewModel.role} </li>
                    <li> {viewModel.type} </li>
                    <li> {viewModel.createAt} </li>
                    <li> {viewModel.updateAt} </li>
                <hr></hr>
            </div>
        </div>
    )
})

export default AuthHandle