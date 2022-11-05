import PostData from '../services/PostData'
import React from "react"
//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataSend (title:string, body:string) {
    const responseStatus = PostData(title, body)
    //console.log("value hey hey ", MyData)
    if (responseStatus === 201) {
        return (
            <div>
                <h2> Post Data Succesfully </h2>
            </div>
        )
    }
    return (
        <div>
            <h2> FAIL </h2>
        </div>
    )
}


function DataPost() {               //สมมติว่า User Post ข้อมูลแบบนี้
    return DataSend("Tontan Tomato1234", "gcvdghvnsvgshbxbhstasgdbsbhxwnsysg24525`guhwjsbjhdbhjxbjbajsbkbaksb")
}

export default DataPost