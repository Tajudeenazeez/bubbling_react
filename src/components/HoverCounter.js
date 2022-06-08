import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    
  render() {
      const {count, handleCount} = this.props
    return (
      <div>
          <h2 onMouseOver={handleCount}>{this.props.name} Hover {count} time</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter)