import React from 'react'
import './App.css'
// import ReturnMemoizFunc from './useCb/ReturnMemoizFunc'
import ParentComp from './useCb/ParentComp'
function App() {

  return (
    <div style={{textAlign: 'center', margin: '10px'}}>
      {/* <ReturnMemoizFunc/> */}
      <ParentComp/>
    </div>
  )
}

export default App