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
      <>
        <h2>Welcome {this.props.player} you are in team {this.props.teamName}</h2>
        <button onClick={this.handleClick}>all players are in!</button>
      </>
    )
  }
}

function mapStateToProps(state){
  return{
    teamName : state.teamName,
    player : state.player,
  }
}

export default connect(mapStateToProps)(Lobby)