import React, { Component } from 'react'

class ClassDoc extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }
    logMousePosition = e => {
        this.setState({
            x : e.clientX,
            y : e.clientY
        })
    }
    componentDidMount(){
     window.addEventListener('mousemove', this.logMousePosition)

    }
    conponentDidUnmount(){
        console.log("component unmounting")
        window.removeEventListener('mousemove', this.logMousePosition)
    }
  render() {
    return (
      <div>
          X - {this.state.x}  and Y - {this.state.y}
      </div>
    )
  }
}

export default ClassDoc