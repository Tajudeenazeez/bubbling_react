import React, {useState, useCallback} from 'react'
import Salary from './Salary'
import Title from './Title'
import UserAge from './UserAge'

function ParentComp() {
    const [salary, setSalary] = useState(300000)
    const [age, setAge] = useState(25)

    const incrementSalary = useCallback(() => {
        setSalary( salary + 50000)
    },[salary] ) 
    const incrementAge = useCallback( () => {
        setAge( age + 1)
    }, [age])

  return (
    <div>
        <Title/>
        <UserAge age={age} incrementAge={incrementAge} />
        <Salary salary={salary}  incrementSalary={incrementSalary} />
    </div>
  )
}

export default ParentComp