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
      labelInterpolationFnc: function(value, index) {
        return Math.round(value / data.series.reduce(sum) * 100) + '% ' + data.label[index];
      }}
    let sum = function(a, b) { return a + b }
    let data = {label: ['Right','Wrong'], series:[this.props.score.correct, this.props.score.total-this.props.score.correct]}
    return(
      <>
      <h1>Congrats Team {this.props.teamName}, you played our game and survived!</h1>
      <ChartistGraph className='ct-chart' data={data} options={options} type={'Pie'} />
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