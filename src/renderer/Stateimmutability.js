import React,{useState} from 'react'

function Stateimmutability(props) {
    console.log("rendering parent")

    const initialState =
    {firstname:'broce', lastName:'eewec'}
    const [post, setPost] = useState(initialState)
   const handlePost = () => {
       setPost({firstname:'TADE', lastname:'TANWA'})
   }
  return (
    <div>post - {post.firstname} {post.lastName}
    
    <button onClick={handlePost}>press me</button>
    {props.children}
    </div>
  )
}

export default Stateimmutability