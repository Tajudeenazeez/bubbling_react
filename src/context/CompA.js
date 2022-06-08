import React, {useContext} from 'react'
import { CountContext } from '../App'
import CompD from './CompD'



function CompA() {
    const countConsumer = useContext(CountContext)
  return (
    <div>
        component A
        <button onClick={() => countConsumer.dispatchFromContext("increment")}>increment</button>
        <button onClick={() => countConsumer.dispatchFromContext("decrement")}>decrement</button>
        <button onClick={() => countConsumer.dispatchFromContext("reset")}>reset</button>

       <CompD/>
    </div>
  )
}

export default CompA