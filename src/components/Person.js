import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
        <span style={{color:"green"}}>My name is {person.name}</span>, <span 
        style={{color:"red"}}>My skill is {person.skill} </span>
        </h2>
    </div>
  )
}

export default Person