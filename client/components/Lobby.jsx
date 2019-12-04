import React from 'react'
import { connect } from 'react-redux'

class Lobby extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'INCREMENT_PAGE'
    })
  }

  render(){
    return(
      <button onClick={this.handleClick}>click me</button>
    )
  }
}

export default connect()(Lobby)