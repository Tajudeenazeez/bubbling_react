import axios from 'axios'
import React, {useState, useEffect} from 'react'

function SinglePost() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handlePostId = () => {
        setIdFromButtonClick(id)
    }
    
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then( res => {
            const data = res.data
            console.log(data)
            setPost(data => data)
        }
            
         
            )
        .catch( err => console.log(err))
    }, [idFromButtonClick])



  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>{post.title}</div>
        <button onClick={handlePostId}>fetch data</button>
    </div>
  )
}

export default SinglePost