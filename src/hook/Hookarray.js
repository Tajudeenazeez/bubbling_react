import React, {useState} from 'react'

function Hookarray() {
    const [items, setItems] = useState([])
    const addItem = () => {
     setItems(items => [

        ...items, 
        {
         id : items.length,
         value : Math.floor(Math.random() * 10 + 1)
     }]
     )        
    }
  return (
    <div>
        <button onClick={addItem}> add number</button>
       <div>
       <ul>
            {
                items.map(item =>{ return <li key={item.id}> {item.value} </li>})
            }

        </ul>
       </div>

    </div>
  )
}

export default Hookarray