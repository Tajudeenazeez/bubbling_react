import React, { Component } from 'react'
import FrInput from './FrInput'

class FRParentInput extends Component {
    constructor(props) {
      super(props) 
    
      this.inputRef = React.createRef()
    }
    handClick = () => {
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
          <FrInput ref={this.inputRef}/>
          <button onClick={this.handClick} >focus input</button>
      </div>
    )
  }
}

export default FRParentInput