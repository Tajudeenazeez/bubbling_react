import React from 'react'

function UserAge({age, incrementAge}) {
    console.log("am from Age")
  return (
    <div>
        Age - {age}
        <button onClick={incrementAge}>increment Age</button>
    </div>
  )
}

export default React.memo(UserAge)