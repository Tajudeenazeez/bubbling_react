import React, {useState} from 'react'

function HookRest() {
    const [name, setName] = useState({firstName: "", lastName: ""})

  return (
    <div>
  
        {name.firstName}  {name.lastName}
        <form>
            <input 
                type = "text" 
                value = { name.firstName } 
                onChange={ e => setName ({
                    ...name, 
                    firstName: e.target.value})}
            />
            <input 
                type = "text" 
                value = { name.lastName } 
                onChange = { e => setName ({
                    ...name, 
                    lastName: e.target.value})}
            />
        </form>
    </div>
  )
}

export default HookRest