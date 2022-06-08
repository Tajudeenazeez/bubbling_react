import React from 'react';
const withCounter = (OriginalComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count : 0
          }
        }
        handleCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
        render() {
            return (
                <OriginalComponent
                 count={this.state.count}
                 handleCount={this.handleCount}
                 {...this.props}
                />
            )
        }
    }
    return WithCounter 
}

export default withCounter

// const ironman = withSuit(TonyStark)