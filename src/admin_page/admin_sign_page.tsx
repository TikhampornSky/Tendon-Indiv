import React, { useState } from 'react';
import './admin_page.css'
import { SignUpHandle, SignInHandle, SignOutHandle } from '../pages/SignView';
import { ContainerProviderTendon } from '../services/container';
import { User } from "../interfaces/TendonType";

function SignUpPage() {
    const [state, setState] = useState<User>({} as User)
    const [showResult, setShowResult] = useState<boolean>(false)
    const onChangeFName = (e: React.FormEvent<HTMLInputElement>): void => {
        setState({
            ...state,
            firstName: e.currentTarget.value
        })
    };
    const onChangeLName = (e: React.FormEvent<HTMLInputElement>): void => {
        setState({
            ...state,
            lastName: e.currentTarget.value
        })
    };
    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        setState({
            ...state,
            email: e.currentTarget.value
        })
    };
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
        setState({
            ...state,
            password: e.currentTarget.value
        })
    };
    const submitHandle = (): void => {
        setShowResult(true)
    }
    return (
        <>
            <div>
                <p> Sign Up </p>
                <div className='update-field'>
                    <div className='label-update'>Firstname: </div> 
                    <input type="text" onChange={ onChangeFName } />
                </div>
                <div className='update-field'>
                    <div className='label-update'>Lastname: </div> 
                    <input type="text" onChange={ onChangeLName } />
                </div>
                <div className='update-field'>
                    <div className='label-update'>Email: </div> 
                    <input type="text" onChange={ onChangeEmail } />
                </div>
                <div className='update-field'>
                    <div className='label-update'>Password: </div> 
                    <input type="text" onChange={ onChangePassword } />
                </div>
                <button onClick={ submitHandle }> Submit </button>
            </div>
            <div>
                <ContainerProviderTendon>
                    <SignUpHandle />
                </ContainerProviderTendon>
            </div>
            <hr></hr>
        </>
    )
}

function SignInPage() {
    return (
        <>
        </>
    )
}

function SignOutPage() {
    return (
        <>
        </>
    )
}

export default function SignPage() {
    return (
        <>
            <div>
                < SignUpPage />
            </div>
            <div>
                < SignInPage />
            </div>
            <div>
                < SignOutPage />
            </div>
        </>
    )
}