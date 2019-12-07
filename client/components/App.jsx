import React from 'react'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import Game from './Game'
import Results from './Results'
import GameEnd from './GameEnd'
import Lobby from './Lobby'
import Countdown from './Countdown'

import socket from '../api/socket'

import { goToGame, goToMainMenu, incrementPage } from '../actions/index'
import { addQuestions, resetQuestions } from '../actions/index'
import { resetPlayerResponses } from '../actions/index'
import { incrementAnswerCount, resetAnswerCount } from '../actions/index'
import { resetClock, decrementClock } from '../actions/index'
import { incrementScore, resetScore } from '../actions/index'
import { incrementRound, resetRound} from '../actions/index'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Page Changes
    socket.on('increment pages', () => {
      this.props.dispatch(incrementPage())
    })

    // Reset Game - back to main menu
    socket.on('main menu', () => {
      this.props.dispatch(resetQuestions())
      this.props.dispatch(resetPlayerResponses())
      this.props.dispatch(goToMainMenu())
    })

    // Start Game
    // When back-end receives 'all players in', it makes the api call to get new questions
    socket.on('all players in', () => {
      this.props.dispatch(resetQuestions())
      this.props.dispatch(resetPlayerResponses())      
      this.props.dispatch(goToGame())
    })

    // Prepare game to start new round
    // When back-end receives 'new question', it makes the api call to get new questions
    socket.on('new question', () => {      
      this.props.dispatch(resetQuestions())
      this.props.dispatch(resetPlayerResponses())
      this.props.dispatch(incrementRound())
      this.props.dispatch(goToGame())      
    })

    // Receives and sets questions array from API call, and starts the timer
    socket.on('receive questions', questions => {
      this.props.dispatch(resetClock(this.props.players.length))
      this.props.dispatch(addQuestions(questions))
      this.interval = setInterval(() => {
        if (this.props.clock == 0 || this.props.pageNumber != 3) {
          clearInterval(this.interval)
          this.props.dispatch(resetClock(this.props.players.length))
        }
        else { this.props.dispatch(decrementClock()) }
      }, 1000)
    })

    // Handle answer count
    socket.on('submitted answer', () => {
      this.props.dispatch(incrementAnswerCount())
    })
    socket.on('reset answer count', () => {
      this.props.dispatch(resetAnswerCount())
    })

    // Reset round count
    socket.on('reset round count', () => {
      this.props.dispatch(resetRound())
    })

    // Handle score count
    socket.on('score', score => {
      this.props.dispatch(incrementScore(score))
    })
    socket.on('reset score', () => {
      this.props.dispatch(resetScore())
    })
  }
  
  render() {
    return (
      <>
        <Countdown/>
        {this.props.pageNumber == 1 && <Welcome />}
        {this.props.pageNumber == 2 && <Lobby />}
        {this.props.pageNumber == 3 && <Game />}
        {this.props.pageNumber == 4 && <Results />}
        {this.props.pageNumber == 5 && <GameEnd />}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    pageNumber: state.pageNumber,
    clock: state.clock,
    players: state.players
  }
}

export default connect(mapStateToProps)(App)