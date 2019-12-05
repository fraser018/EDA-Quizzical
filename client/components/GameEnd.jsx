import React from 'react'
import ChartistGraph from 'react-chartist'
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
    let options ={
      labelInterpolationFnc: function(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
      }}
    let sum = function(a, b) { return a + b }
    let data = {labels:['correct', 'incorrect'],series:[7, 10, 11]}
    return(
      <>
      <ChartistGraph className='ct-chart' data={data} options={options} type={'Pie'} />
      {/* <h1>Congrats Team {this.props.teamName}, you played our game and survived!</h1>
      <p>Your team got {this.props.score.correct} out of {this.props.score.total} answers correct!</p>
      {this.props.player.captain && <button onClick={this.playAgain}>Play again!!</button>}     
      {this.props.player.captain && <button onClick={this.mainMenu}>Main Menu</button>}           */}
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