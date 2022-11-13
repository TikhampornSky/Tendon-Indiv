// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import React from "react"
import Post from "../interfaces/Post";
import { observer } from "mobx-react"
import { useContext, useState, useEffect } from "react";
import { containerContext } from '../services/Container'
import ShowDataViewModel from './ShowDataViewModel'

import { useContainer } from "../services/NewContainer";


const ShowDataHandle = observer(() => {              //observer converts React components into derivations of the data they render                
    //ส่งไปหา dataViewModel
    const [postsView, setPostsView] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])  
    const getContext = useContext(containerContext.getService)
    const viewModel = new ShowDataViewModel(useContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getPostsDataShow()
            myResolve(tmpValue)
            // const tmp = async () =>  {
            //     const tmpValue =  await postContext.getPosts()
            //     setPosts(tmpValue)
            // }
            // tmp()
        }, [])
    }).then(() => {
        setPostsView(viewModel.getViewPosts())
    })
    
    // console.log(Date.now(), postsView)          //Must use postView

    return (
        <div>
            {/* <p> My data is.. render </p> */}
            {/* {postsView.map((postData: Post) => (
                <div key= {postData.id}>
                    <p>{postData.id} { '-->' } {postData.title}</p>
                    <li> {postData.body} </li>
                <hr></hr>
            </div>
            ))} */}
            <ShowDataView viewModel={postsView}/>
        </div>              
    )
})

interface ShowDataViewProps {
    viewModel: Post[]
}

const ShowDataView = observer(({viewModel}: ShowDataViewProps) => {           //ส่งจาก dataViewModel มาแสดงผล
    console.log("-->", Date.now())
    return (
        <div>
            {viewModel.map((postData: Post) => (
                <div key= {postData.id}>
                    <p>{postData.id} { '-->' } {postData.title}</p>
                    <li> {postData.body} </li>
                <hr></hr>
            </div>
            ))}
            {/* {JSON.stringify(posts)} */}
        </div>
    )
})

export default ShowDataHandle