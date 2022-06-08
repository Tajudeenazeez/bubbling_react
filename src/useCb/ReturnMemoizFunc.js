import React, {useCallback, useState} from 'react'

function ReturnMemoizFunc() {

    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

  return (
    <div>
        <button onClick={() => setCount( count + 1)}>count {count}</button>
        <button onClick={() => setCountTwo(countTwo + 2)}>countTwo {countTwo}</button>


    </div>
  )
}

export default ReturnMemoizFunc