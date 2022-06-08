import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMessage: ""
      }
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts1")
        .then(
            response => {
                this.setState({ posts: response.data})
                console.log(response.data)
            }
        )
        .catch(error => {
            console.log(error)
            this.setState({errorMessage:  "Error fetching data"})
        }
            )

        }
    
  render() {
      const {posts, errorMessage} = this.state
    return (
     <div>
         List of posts
         <ul>
         {
         posts.length ?  
             posts.map(post => {
            return (
            <li key={post.id}>{post.title}</li>
             )
         })
          : null
     }
     </ul>
     {errorMessage ? <div>{errorMessage}</div> : null}
     </div>
    )
  }
}

export default Posts