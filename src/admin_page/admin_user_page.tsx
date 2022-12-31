import React, { useState } from 'react';
import './admin_page.css'
import { UserGetHandle, UserUpdateHandle, UserDeleteHandle } from '../pages/UserView';
import { ContainerProviderTendon } from '../services/container';
import { User } from "../interfaces/TendonType";

type stateType = {
    id: string;
};

interface resultShowType {
    IsShow: boolean,
    ID: string,
    method: string,
    body: User
}

interface updateCase {
    isUpdate: boolean
}

interface userInputpageType {
    method: string,
    shown: boolean
}

var updatedata = {} as User

function ShowResultField(props: resultShowType) {
    if (props.IsShow === true) {
        if (props.method === "GET") {
            return (
                <>
                    <ContainerProviderTendon>
                        <div>
                            <UserGetHandle user_id = { props.ID } body = { {} as User} ></UserGetHandle>
                        </div>
                    </ContainerProviderTendon>
                </>
            )
        } else if ( props.method === "UPDATE" ) {
            return (
                <>
                    <ContainerProviderTendon>
                        <div>
                            <UserUpdateHandle user_id = { props.ID } body = {props.body} ></UserUpdateHandle>
                        </div>
                    </ContainerProviderTendon>
                </>
            )
        } else if ( props.method === "DELETE" ) {
            return (
                <>
                    <ContainerProviderTendon>
                        <div>
                            <UserDeleteHandle user_id = { props.ID } body = { {} as User}></UserDeleteHandle>
                        </div>
                    </ContainerProviderTendon>
                </>
            )
        } else {
            return (
                <> </>
            )
        }
    } else {
        return (
            <></>
        )
    }
}

function InputForUpdate(UpdateCase: updateCase) {
    const onChangeFName = (e: React.FormEvent<HTMLInputElement>): void => {
        updatedata.firstName = e.currentTarget.value
    };
    const onChangeLName = (e: React.FormEvent<HTMLInputElement>): void => {
        updatedata.lastName = e.currentTarget.value
    };
    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        updatedata.email = e.currentTarget.value
    };
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
        updatedata.password = e.currentTarget.value
    };
    if (UpdateCase.isUpdate === true) {
        return (
            <>
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
            </>
        )
    } else {
        return (
            <></>
        )
    }
    
}

export default function UserInputPage(props: userInputpageType) {
    const [state, setState] = useState<stateType>({ id: "" })
    const [showResult, setShowResult] = useState<boolean>(false)

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setState({ id: e.currentTarget.value });
        setShowResult(false)
    };

    const submitHandle = (): void => {
        setShowResult(true)
    }

    if (props.shown === false) {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <div>
                    [ {props.method} method ]  Please Enter User's ID:  
                    <input type="text" value={ state.id } onChange={ onChange } />
                    <InputForUpdate isUpdate = { props.method === "UPDATE" } />
                    <button onClick={ submitHandle }> Submit </button>
                    {/* <p> { state.text } </p> */}
                </div>
                <ShowResultField IsShow={ showResult } ID = { state.id } method = { props.method } body = { updatedata } />
            </>
        );
    }
}