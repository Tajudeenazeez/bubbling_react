import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick(){
        console.log("You clicked me")
    }
  render() {
    return (
      <div>
          <button 
          onClick={this.handleClick}>
              click me now
          </button>
      </div>
    )

  }
}

export default ClassClick