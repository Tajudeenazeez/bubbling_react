import React, { Component } from 'react'

class HandleButton extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: ''
      }
    }
    handleNameChange = (event) => {
      this.setState({ first: event.target.value})
  }
  handleSubmit = () =>{
    alert( `my name is ${this.state.first}`)
  }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input 
              type='text' 
              value={this.state.first} 
              onChange={this.handleNameChange}
               />
               <button type='submit' >submit</button>

        </form>
         
      </div>
    )
  }
}

export default HandleButton

// import React, { useState } from 'react'

// function HandleButton() {
//   let [name, setName] = useState("")
//   const handleNameChange = (e) => {
//     setName(
//       name = e.target.value

//     )
//   }

//   return (
//     <div>
//       <label>Name</label>
//       <input
//       type="text"
//       value={name}
//       onChange={handleNameChange}
      
//       />
//     </div>
//   )
// }

// export default HandleButton