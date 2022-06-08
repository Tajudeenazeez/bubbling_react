import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
const initialState = {
    isLoading: true,
    post: {},
    isError: ""
}
 const reducer = (state, action) => {
     switch(action.type) {
         case "FETCH_SUCCESS":
             return {isLoading:false, post: action.payload}
        case "FETCHING_FAIL": 
            return {isLoading:false, isError: "Something went wrong"}
        default:
            return state
     }
 }

function StateFetchTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts1")
        .then(response => {
           dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error => {
           dispatch({ type: "FETCHING_FAIL", payload: {}})
        })


    }, [])
  return (
    <div>
        {state.isLoading ? "Loading..." : <div>{post.title}</div>}
        {state.isError ? state.isError : null}
    </div>
  )
}

export default StateFetchTwo