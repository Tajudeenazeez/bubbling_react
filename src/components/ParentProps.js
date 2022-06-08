import React from 'react'
import ChildProps from './ChildProps'

function ParentProps() {
    // const clickMe = () => {console.log("hello")}
  return (
    <div>
        <ChildProps/>
        <button>ParentBtn</button>
    </div>
  )
}

export default ParentProps