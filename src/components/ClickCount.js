import React, { Component } from 'react'

class ClickCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         countf:0
      }
    }
    handleCount = () => {
        this.setState(
            (prevState) => {
                return {count: prevState.count + 1}
                }
            )
        this.setState(
            (prevState) => {
            return {count: prevState.count + 10}
            }
            )
    }
    handleCountagain = () => {
        this.setState({
            countf: this.state.countf + 5
        }
        )
    }
  render() {
      const {count, countf} = this.state
    return (
      <div>
          <button onClick={this.handleCount}>Click {count} count</button>
          <button onClick={this.handleCountagain}>Click {countf} X </button>
      </div>
    )
  }
}

export default ClickCount