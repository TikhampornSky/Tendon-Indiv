import {useState} from 'react'

function PostData (title: string, body: string) {
    const [status, setStatus] = useState(0)

    const addPosts = async (title: string, body: string) => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 77777777,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (response.ok) {
                console.log("Status is ", response.status)
                setStatus(response.status)
            }
        })
        .catch((err) => {
            console.log(err.message)
        });
    };

    addPosts(title, body)

    return (
        status
    )
}

export default PostData