// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        mood: 'happy'
    }
  }

    handleState = () => {
        this.setState({mood: 'sad'})
    }

    render() {
        return <div onClick={this.handleState}>{this.state.mood}</div>
    }
}

export default SimpleComponent