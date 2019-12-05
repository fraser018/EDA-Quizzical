import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

class GameEnd extends React.Component {
  constructor(props){
    super(props)
  }

  playAgain = (e) => {
    e.preventDefault()
    socket.emit('new question', {teamName:this.props.teamName, numOfPlayers: this.props.players.length})
  }

  mainMenu = (e) => {
    e.preventDefault()
    socket.emit('main menu', this.props.teamName)
  }

  render(){
    return(
      <>
      <h1>Congrats, you played our game and survived!</h1>
      <h2>{this.props.teamName}</h2>
      {/* <p>you got 7 out of 10 answers correct </p> from redux number of correct and false responses */}
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
    players: state.players
  }
}

export default connect(mapStateToProps)(GameEnd)