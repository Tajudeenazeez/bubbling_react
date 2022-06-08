import React, { Component } from 'react'

export class EventHandler extends Component {
    constructor(props) {
      super(props)
      this.state = {
         click: "Hello"
      }
     
      this.greetingHandler =  this.greetingHandler.bind(this)
    }
    // greetingHandler = () => {
    //     this.setState({
    //         click: "welcome back"
    // })
    // }
    greetingHandler(){
        this.setState({
            click: "welcome back"
        })
       }
       //handle the eventhandler with arrow func in the constructor body [beta test]
       //handle the eventHandler by using bind for the this in the button body
       //handle the eventHandler by using arrow function in the button body while calling it
       //handle the eventHandler by using bind in the constructor body
  render() {
  
    return (
      <div>
          <div>
              {this.state.click}
          </div>
          {/* <button onClick = {this.greetingHandler.bind(this)}>
              click
          </button> */}
          {/* <button onClick={() => this.greetingHandler()}>click</button>
           */}
           <button onClick={this.greetingHandler}>click</button>
      </div>
    )
  }
}

export default EventHandler