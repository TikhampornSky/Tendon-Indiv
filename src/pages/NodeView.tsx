import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";

import { useTendonContainer } from "../service/container";
import NodeShowDataViewModel from "./NodeViewModel";
import { Node } from "../interfaces/TendonType";
import { token } from "../_demo_setting";

export var user_id_new: string;         // For Testing purpose

export const NodeCreateHandle = observer(() => {

    const [nodeView, setNodeView] = useState<Node>({} as Node)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
    var body: Node = {
        id: '',
        type: 'NewType',
        data: 'BriefData',
        createBy: '',
        updateAt: '',
    }
    const viewModel = new NodeShowDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.createNode(body, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setNodeView(viewModel.getNode())
        setMessage(viewModel.getMessage())
        setStatus(viewModel.getStatus())
    })

    if (status === 201) {
        return (
            <div>
                <p> [ Node POST ] </p>
                <DataView viewModel={ nodeView } />
            </div>              
        )
    } else {
        return (
            <div>
                <p> "NODE POST ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

interface ShowDataViewProps {
    viewModel: Node
}

const DataView = observer(( {viewModel}: ShowDataViewProps) => {
    user_id_new = viewModel.id
    return (
        <div>
                <div key= {viewModel.id}>
                    <p> **** {viewModel.id} **** </p>
                    <li> {viewModel.type} </li>
                    <li> {viewModel.data} </li>
                    <li> {viewModel.updateAt} </li>
                    <hr></hr>
                </div>
        </div>
    )
})