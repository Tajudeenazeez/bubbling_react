import React from 'react'
import './App.css'
import Stateimmutability from './renderer/Stateimmutability'
import OptimizedWitProps from './renderer/OptimizedWitProps'
// import ReturnMemoizFunc from './useCb/ReturnMemoizFunc'
// import ParentComp from './useCb/ParentComp'
// import DocumentTitle from './customhook/DocumentTitle'
// import StateUseFunc from './statefetch/StateUseFunc'
// import HookDoc from './hook/HookDoc'
function App() {

  return (
    <div style={{textAlign: 'center', margin: '10px'}}>
      <Stateimmutability>
       <OptimizedWitProps/>
      </Stateimmutability>
      {/* <ReturnMemoizFunc/> */}
      {/* <ParentComp/> */}
      {/* <DocumentTitle/> */}
      {/* <StateUseFunc/> */}
      {/* <HookDoc /> */}
    </div>
  )
}

export default App