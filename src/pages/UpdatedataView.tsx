// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import React from "react"
import Post from "../interfaces/Post";
import { observer } from "mobx-react"
import { useContext, useState, useEffect } from "react";
import { containerContext } from '../services/Container'
import UpdateDataViewModel from './UpdateDataViewModel'


const UpdateDataHandle = observer(() => {       //ส่งไปหา dataViewModel
    const [updateStatus, setupdateStatus] = useState<Number>(0)  
    const updateContext = useContext(containerContext.updateService)
    const dataOUT = GetDataUpdateOut()
    const viewModel = new UpdateDataViewModel(updateContext, dataOUT)
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.updateData(dataOUT.id)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setupdateStatus(viewModel.getUpdateStatus())
    })

    if (updateStatus === 200) {
        return (
            <div>
                <UpdateDataView viewModel={updateStatus}/>
            </div>              
        )
    } else {
        return (
            <div>
                <p> ERROR! Post Data Unsuccessful!</p>
            </div>              
        )
    }
})

interface ShowDataViewProps {
    viewModel: Number
}

const UpdateDataView = observer(( {viewModel}: ShowDataViewProps) => {           //ส่งจาก dataViewModel มาแสดงผล
    console.log(Date.now(), " => " , viewModel)
    if (viewModel === 200) {
        return (
            <div>
                <p> Update Data Successfully</p>
            </div>
        )
    } else {
        return (
            <div>
                <p> ERROR!! Update Data UNSuccessfully</p>
            </div>
        )
    }
})

function GetDataUpdateOut() {             //assume that this is Data that user want to Post
    var newPost: Post = {
        id: 1,
        userId: 6330203521,
        title: "455fhbbhcbhdsbdbmxnbydghsx",
        body: "gvghbxgdxhdthfujsbchido hccndnnaxjnpqsmhjxbhbckxnbhfbjhbmnxm mmbcjdckjnxnz, mkjchdhkxncksxjnknnxkknxnn"
    }

    return newPost
}

export default UpdateDataHandle