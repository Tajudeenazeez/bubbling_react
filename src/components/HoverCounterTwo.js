import React, { Component } from 'react'

class HoverCounterTwo extends Component {
  render() {
      const {count, incrementCounter} = this.props
    return (
      <div>
          <button onMouseOver={incrementCounter}> hover {count} times</button>
      </div>
    )
  }
}

export default HoverCounterTwo