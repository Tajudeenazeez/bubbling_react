import React, {useContext} from 'react'
import { CountContext } from '../App'



function CompF() {
    const countConsumer = useContext(CountContext)
  return (
    <div>
        
        Component F
        <button onClick={() => countConsumer.dispatchFromContext("increment")}>increment</button>
        <button onClick={() => countConsumer.dispatchFromContext("decrement")}>decrement</button>
        <button onClick={() => countConsumer.dispatchFromContext("reset")}>reset</button>

    </div>
  )
}

export default CompF