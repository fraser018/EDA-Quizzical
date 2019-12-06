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
    return (
      <div className='end'>
        <h1 className='end-gameTitle'>Quizzical</h1>
        <h1 className='end-title'>
          Congrats Team {this.props.teamName}, you played our game and survived!
        </h1>
        <h3>
          Your team got {this.props.score.correct} out of{' '}
          {this.props.score.total} answers correct!
        </h3>
        <div className='end-btns'>
          {this.props.player.captain && (
            <div className='end-btns__btn' onClick={this.playAgain}>
              Play again!!
            </div>
          )}
          {this.props.player.captain && (
            <div className='end-btns__btn' onClick={this.mainMenu}>
              Main Menu
            </div>
          )}
        </div>
      </div>
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