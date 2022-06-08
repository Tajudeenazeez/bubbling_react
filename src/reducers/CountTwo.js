import React, {useReducer} from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state,firstCount: state.firstCount + action.value}
        case "decrement":
            return {...state, firstCount: state.firstCount - action.value}
        case "incrementFive":
            return {...state, secondCount: state.secondCount + action.value}
        case "decrementFive":
            return {...state, secondCount: state.secondCount - action.value}
        case "reset":
            return initialState
        default:
            return state
    }
}
function CountTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        count {count.firstCount}
        countFive {count.secondCount}
        <button onClick={() => dispatch({type: "incrementFive", value: 5}) }>incrementFive</button>
        <button onClick={() => dispatch({type: "decrementFive", value: 5}) }>decrementFive</button>

        <button onClick={() => dispatch({type: "increment", value: 2}) }>increment</button>
        <button onClick={() => dispatch({type: "decrement", value: 2}) }>decrement</button>
        <button onClick={() => dispatch({type: "reset"}) }>reset</button>
    </div>
  )
}

export default CountTwo