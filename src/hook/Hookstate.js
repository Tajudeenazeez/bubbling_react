import React, {useState} from 'react'

function Hookstate() {
    const initialstate = 0
    const [count, setCount] = useState(initialstate)
  return (
    <div>
        this is counting..{count}
        <button onClick={() => setCount(initialstate )}>reset</button>
        <button onClick={() => setCount(prevState => prevState + 1 )}>increment me</button>
        <button onClick={() => setCount(prevState => prevState - 1 )}>decrement me</button>
    </div>
  )
}

export default Hookstate