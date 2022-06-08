import React, {useReducer} from 'react'
import './App.css'
import CompA from './context/CompA'
import CompB from './context/CompB'
import CompC from './context/CompC'

export const CountContext = React.createContext()

const initialState = 0
 
const reducer = (state, action) => {

    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

function App() {

const CountProvider = CountContext.Provider

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountProvider value={{countFromContext: count, dispatchFromContext: dispatch}}>
    <div>
      count {count}
      <CompA/>
    </div>
    </CountProvider>
  )
}

export default App