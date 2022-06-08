import React from 'react'

function ChildProps(props) {
    const handlerClick = () => {
        console.log("hello")
    }
  return (
    <div>
        <button onClick={() => {props.handlerClick()}} >
            childBtn
        </button>
    </div>
  )
}

export default ChildProps