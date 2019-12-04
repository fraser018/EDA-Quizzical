import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

class Lobby extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    socket.on('all players in', ()=>{
      this.props.dispatch({
        type: 'INCREMENT_PAGE'
      })
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    socket.emit('all players in', this.props.teamName)
  }

  render(){
    return(
      <button onClick={this.handleClick}>click me</button>
    )
  }
}

function mapStateToProps(state){
  return{
    teamName : state.teamName
  }
}

export default connect(mapStateToProps)(Lobby)