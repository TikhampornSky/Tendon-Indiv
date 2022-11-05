import DataDelete from '../services/DeleteData'
import React from "react"
//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataDeleteHandleCall (id: number) {
    DataDelete(id)
    //console.log("value hey hey ", MyData)
    return (
        <div>
            <h2> Delete Success! </h2>
        </div>
    )
}


function DataDeleteCall() {               //สมมติว่า User Post ข้อมูลแบบนี้
    return DataDeleteHandleCall(1)
}

export default DataDeleteCall