import React from 'react'

function FunctionClick() {
    const handleClick = ()=>{
        console.log("button clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>clickme</button>
    </div>
  )
}

export default FunctionClick