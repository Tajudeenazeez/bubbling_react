import React from 'react'
import Person from './Person'

function UserParent() {

  const persons = [
    {
      id:1,
      name: "Bruce",
      skill: "Speedy",
    },
    {
      id:2,
      name: "Diana",
      skill: "Lightening",
    },
    {
      id:3,
      name: "Karl",
      skill: "Windy",
    }
  ]
  return (
  <div>
     { persons.map( person => 
     <div>
     <Person  person={person}/>
     </div>
     ) }
  </div>

    
  )
}

export default UserParent