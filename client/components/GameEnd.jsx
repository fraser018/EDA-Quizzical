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
    socket.emit('reset score', this.props.teamName)
    socket.emit('main menu', this.props.teamName)
  }

  render(){
     let options ={
      labelInterpolationFnc: function(value, index) {
        return Math.round(value / data.series.reduce(sum) * 100) + '% ' + data.label[index];
      }}
    let sum = function(a, b) { return a + b }
    let data = {label: ['Right','Wrong'], series:[this.props.score.correct, this.props.score.total-this.props.score.correct]}

    return (
      <div className='end'>
        <h1 className='end-gameTitle'>Quizzical</h1>
        <h1 className='end-title'>
          Congrats Team {this.props.teamName}, you played our game and survived!
        </h1>
        <ChartistGraph className='ct-chart' data={data} options={options} type={'Pie'} />
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