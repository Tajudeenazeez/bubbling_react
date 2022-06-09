import React, {useMemo, useState} from 'react'

function ReturnMemoizFunc() {

    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const increment = () => {
     setCount( count + 1)
    }
    const isEven =  useMemo(() => {
      let i = 0;
      while(i < 2000000) i++;
      return count % 2 === 0
    },[count])

  return (
    <div>
        <button onClick={increment}>count {count}</button>
        <span>{isEven ? 'even' : 'odd'}</span>
        <button onClick={() => setCountTwo(countTwo + 2)}>countTwo {countTwo}</button>


    </div>
  )
}

export default ReturnMemoizFunc