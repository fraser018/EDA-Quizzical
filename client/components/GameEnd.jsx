import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

class GameEnd extends React.Component {
  constructor(props){
    super(props)
  }

  playAgain = (e) => {
    e.preventDefault()
    socket.emit('reset score', this.props.teamName)
    socket.emit('new question', {teamName:this.props.teamName, numOfPlayers: this.props.players.length})
  }

  mainMenu = (e) => {
    e.preventDefault()
    socket.emit('main menu', this.props.teamName)
  }

  render(){
    return(
      <>
      <h1>Congrats Team {this.props.teamName}, you played our game and survived!</h1>
      <p>Your team got {this.props.score.correct} out of {this.props.score.total} answers correct!</p>
      {this.props.player.captain && <button onClick={this.playAgain}>Play again!!</button>}     
      {this.props.player.captain && <button onClick={this.mainMenu}>Main Menu</button>}          
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    teamName: state.teamName,
    player : state.player,
    players: state.players,
    score: state.score
  }
}

export default connect(mapStateToProps)(GameEnd)