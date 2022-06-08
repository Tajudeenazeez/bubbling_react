import React, {useContext} from 'react'

import CompE from './CompE'
import { CountContext } from '../App'



function CompD() {
    const countConsumer = useContext(CountContext)
    return (
    <div>
        Component D
        <button onClick={() => countConsumer.dispatchFromContext("increment")}>increment</button>
        <button onClick={() => countConsumer.dispatchFromContext("decrement")}>decrement</button>
        <button onClick={() => countConsumer.dispatchFromContext("reset")}>reset</button>

       <CompE/>
    </div>
  )
}

export default CompD