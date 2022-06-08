import React from 'react'
import {UserConsumer} from './UserContext'
function CompC() {
  return (
   <UserConsumer>
      {
          (username) => {
              return ( <div> my name is {username}</div>)
          }
      }

   </UserConsumer>
  )
}

export default CompC