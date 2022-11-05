import DataUpdate from '../services/UpdateData'
import React from "react"
//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataUpdateHandleCall (id: number) {
    const responseStatus = DataUpdate(id)
    //console.log("value hey hey ", MyData)
    if (responseStatus === 201 || responseStatus === 200) {
        return (
            <div>
                <h2> Update Data Succesfully </h2>
            </div>
        )
    }
    return (
        <div>
            <h2> FAIL UPDATE </h2>
        </div>
    )
}


function DataUpdateCall() {               //สมมติว่า User Post ข้อมูลแบบนี้
    return DataUpdateHandleCall(1)
}

export default DataUpdateCall