import {useState} from 'react'
import axios from 'axios'

async function DataDelete(id: number) {
    const [statusDELETE, setstatusDELETE] = useState("")

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => {
        setstatusDELETE("Delete Success")
    })

    return (
        statusDELETE
    )
}

export default DataDelete