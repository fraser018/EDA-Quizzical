import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

class Lobby extends React.Component{
  constructor(props){
    super(props)
    this.state={
      players:[]
    }
  }

  componentDidMount(){
    socket.on('show players in lobby', players=>{
      this.setState({
        players: players
      })
    })
    socket.on('all players in', ()=>{
      this.props.dispatch({
        type: 'INCREMENT_PAGE'
      })
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    socket.emit('all players in', {teamName:this.props.teamName, numOfPlayers: this.state.players.length})
  }

  render(){
    return(
      <>
        <h2>Welcome {this.props.player.name} you are in team {this.props.teamName}</h2>
        <button onClick={this.handleClick}>all players are in!</button>
        {this.state.players.length > 0 && this.state.players.map(player=>{
        return <h3 key={player.id}>{player.name} has join the team!</h3>
        })}
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