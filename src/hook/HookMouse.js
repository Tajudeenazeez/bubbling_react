import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
          setX(e.clientX)
          setY(e.clientY)
     
      
    }
    useEffect(() => {
        console.log("effect called")
        window.addEventListener("mouseover", logMousePosition)
        return ()=> {
            console.log("component unmounting")
            window.removeEventListener("mouseover", logMousePosition)
        }   
    }, [])
  return (
    <div>
        X is {x} Y is {y}
    </div>
  )
}

export default HookMouse