import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, SetLoading] = useState(true)
    const [error, SetError] = useState('')
    const [post, SetPost] = useState({})


    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(reponse =>{
            SetLoading(false)
            SetPost(reponse.data)
            SetError('')
        })
        .catch(error => {
            SetLoading(false)
            SetPost({})
            SetError('Something wrong')
        })

    }, [])

    return (
        <div>
            {loading ? "Loading..." : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
