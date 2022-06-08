import React, {useState, useEffect} from 'react'
import axios from 'axios'


function StateFetch() {

    const [post, setPost] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState('')

    useEffect(() => {
      
    
      return () => {
        axios.get("https://jsonplaceholder.typicode.com/posts1")
        .then(response => {
            setIsLoading(false)
            setIsError('')
            setPost(response.data)
        })
        .catch(error => {
            setIsLoading(false)
            setIsError("Something went wrong")
            setPost({})
        })
      }
    }, [])
    
  return (
    <div>
        {isLoading ? "Loading..." : (<div>{post.title}</div>)}
            
          { isError ? {isError} : null }
    </div>
  )
}

export default StateFetch