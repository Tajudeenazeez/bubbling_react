import React, {useState, useEffect} from 'react'

function HookDoc() {
  console.log("in component")
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( ()=> {
        console.log("updating render in useEffect")
        document.title = `You click ${count} times`
    }, [count])
  return (
    <div>
      {console.log("in render")}
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>
        click {count} times
        </button>
    </div>
  )
}

export default HookDoc