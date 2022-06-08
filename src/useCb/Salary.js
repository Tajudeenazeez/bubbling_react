import React from 'react'

function Salary({salary, incrementSalary}) {
    console.log("am from salary")
  return (
    <div>
        Salary - {salary}
        <button onClick={incrementSalary}>increment salary</button>
    </div>
  )
}

export default React.memo(Salary)