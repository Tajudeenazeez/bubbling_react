import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "tayo"
      }
      console.log("LifeCycleA is constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA is a derivativeProps")
        return null;
    }

   handleChange = () => {
   this.setState({
      name: "Umar"
    })
console.log("LifeCycleA is handleChange")
  }
  componentDidMount(){
    console.log("LifeCycleA is componentDidMount")
    
   }
  render() {
      console.log("LifeCycleA is render")
    return (
      <React.Fragment>
          <h1>this is me</h1>
          <div>{this.state.name}</div>
          {/* <input type="text" value="Hello" onChange={this.handleClick} /> */}
          <button type="button" onClick={this.handleChange}>click me</button>
      </React.Fragment>
    )
  }
}

export default LifeCycleA