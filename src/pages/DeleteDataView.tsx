// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import React from "react"
import { observer } from "mobx-react"
import { useContext, useState, useEffect } from "react";
import { containerContext } from '../services/Container'
import DeleteDataViewModel from './DeleteDataViewModel'

import { useContainer } from "../services/NewContainer";

const DeleteDataHandle = observer(() => {       //ส่งไปหา dataViewModel
    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    // const deleteContext = useContext(containerContext.deleteService)
    const viewModel = new DeleteDataViewModel( useContainer() )
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteData(GetIDDelete())
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setDeleteStatus(viewModel.getDeleteStatus())
    })

    console.log("Delete Status: ", deleteStatus)
    if (deleteStatus === 200) {
        return (
            <div>
                <DeleteDataView viewModel={deleteStatus}/>
            </div>              
        )
    } else {
        return (
            <div>
                <p> ERROR! Delete Data Unsuccessful!</p>
            </div>              
        )
    }
})

interface ShowDataViewProps {
    viewModel: Number
}

const DeleteDataView = observer(( {viewModel}: ShowDataViewProps) => {           //ส่งจาก dataViewModel มาแสดงผล
    // console.log(Date.now(), " => " , viewModel)
    return (
        <div>
            <p> Delete Data Successfully</p>
        </div>
    )
})

function GetIDDelete() {             //assume that this is id that user want to delete
    return 2
}

export default DeleteDataHandle