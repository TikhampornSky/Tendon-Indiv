import {useState} from 'react'
import axios from 'axios'

function DataUpdate (id: number) {
    const [statusUPDATE, setstatusUPDATE] = useState(0)

    async function updateHandle() {
        //const res = await axios.put('https://httpbin.org/put', { hello: 'world' });
        //setstatusUPDATE(res.status)
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: 'Tontan Platoo',
            body: 'This is the sea world.'
        })
        .then((res => {
            setstatusUPDATE(res.status)
        }))
    }

    updateHandle();
    
    //res.data.json;
    return (
        statusUPDATE
    )
}

export default DataUpdate