import React, {useState} from 'react'

function StateUseFunc({initialState =0}) {
    const [count, setCount] = useState(initialState)
  return (
    <div>
        Count - {count}
        <button onClick={setCount(prevState => prevState - 1 )}>-</button>
        <button onClick={setCount(prevState => prevState + 1 )}>+</button>
        <button onClick = {initialState}>reset</button>
    </div>
  )
}

export default StateUseFunc