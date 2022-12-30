import React, { useState } from 'react';
import { UserGetHandle, UserUpdateHandle, UserDeleteHandle } from '../pages/UserView';
import { ContainerProviderTendon } from '../services/container';

type stateType = {
    id: string;
};

interface inputType {
    method: string
}

interface resultShowType {
    IsShow: boolean,
    ID: string,
    method: string
}

interface updateCase {
    isUpdate: boolean
}

function ShowResultField(props: resultShowType) {
    if (props.IsShow === true) {
        if (props.method === "GET") {
            return (
                <>
                    <ContainerProviderTendon>
                        <div>
                            <UserGetHandle user_id = { props.ID } ></UserGetHandle>
                        </div>
                    </ContainerProviderTendon>
                </>
            )
        } else if ( props.method === "UPDATE" ) {
            return (
                <>
                    <ContainerProviderTendon>
                        <div>
                            <UserUpdateHandle user_id = { props.ID } ></UserUpdateHandle>
                        </div>
                    </ContainerProviderTendon>
                </>
            )
        } else if ( props.method === "DELETE" ) {
            return (
                <>
                    <ContainerProviderTendon>
                        <div>
                            <UserDeleteHandle user_id = { props.ID } ></UserDeleteHandle>
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
    const [firstname, setFirstName] = useState<string>("")
    const onChangeFName = (e: React.FormEvent<HTMLInputElement>): void => {
        setFirstName(e.currentTarget.value)
    };
    const [lastname, setLastName] = useState<string>("")
    const onChangeLName = (e: React.FormEvent<HTMLInputElement>): void => {
        setLastName(e.currentTarget.value)
    };
    const [email, setEmail] = useState<string>("")
    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value)
    };
    const [password, setPassword] = useState<string>("")
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value)
    };
    if (UpdateCase.isUpdate === true) {
        return (
            <>
                <input type="text" value={ firstname } onChange={ onChangeFName } />
                <input type="text" value={ lastname } onChange={ onChangeLName } />
                <input type="text" value={ email } onChange={ onChangeEmail } />
                <input type="text" value={ password } onChange={ onChangePassword } />
            </>
        )
    } else {
        return (
            <></>
        )
    }
    
}

export default function UserInputPage(method: inputType) {
    const [state, setState] = useState<stateType>({ id: "" })
    const [showResult, setShowResult] = useState<boolean>(false)

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setState({ id: e.currentTarget.value });
        setShowResult(false)
    };

    const submitGET = (): void => {
        console.log(state)
        setShowResult(true)
    }

    return (
        <>
            <div>
                [ {method.method} method ]  Please Enter User's ID:  
                <input type="text" value={ state.id } onChange={ onChange } />
                <InputForUpdate isUpdate = { method.method === "UPDATE" } />
                <button onClick={ submitGET }> Submit </button>
                {/* <p> { state.text } </p> */}
            </div>
            <ShowResultField IsShow={ showResult } ID = { state.id } method = { method.method } />
        </>
    );
}