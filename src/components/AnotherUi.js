import React, { Component } from 'react'

export class AnotherUi extends Component {
  render() {
      const {count, incrementCounter} = this.props
    return (
      <div>
          <button onMouseUp={incrementCounter}> I am counting {count} </button>
      </div>
    )
  }
}

export default AnotherUi