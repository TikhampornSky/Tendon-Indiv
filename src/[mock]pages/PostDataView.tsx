// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import React from "react"
import Post from "../[mock]Interface/Post";
import { observer } from "mobx-react"
import { useState, useEffect } from "react";
import PostDataViewModel from './PostDataViewModel'

import { useContainer } from "../[mock]services/NewContainer";

const PostDataHandle = observer(() => {       //ส่งไปหา dataViewModel
    const [postStatus, setpostStatus] = useState<Number>(0)  
    const dataOUT = GetDataSendOut()
    const viewModel = new PostDataViewModel( useContainer(), dataOUT)
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.postData()
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setpostStatus(viewModel.getPostStatus())
    })
    
    // console.log(Date.now(), "post is ", postStatus)

    if (postStatus === 201) {
        return (
            <div>
                <PostDataView viewModel={postStatus}/>
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

const PostDataView = observer(( {viewModel}: ShowDataViewProps) => {           //ส่งจาก dataViewModel มาแสดงผล
    return (
        <div>
            <p> Post Data Successfully</p>
        </div>
    )
})

function GetDataSendOut() {             //assume that this is Data that user want to Post
    var newPost: Post = {
        id: 123456,
        userId: 6330203521,
        title: "455fhbbhcbhdsbdbmxnbydghsx",
        body: "gvghbxgdxhdthfujsbchido hccndnnaxjnpqsmhjxbhbckxnbhfbjhbmnxm mmbcjdckjnxnz, mkjchdhkxncksxjnknnxkknxnn"
    }

    return newPost
}

export default PostDataHandle