import React, {useState} from 'react'
import HookMouse from './HookMouse'

function ToggleMouse() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}> toggle button</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default ToggleMouse