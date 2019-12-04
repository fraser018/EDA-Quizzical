import React from 'react'

import Welcome from './Welcome'
import Instructions from './Instructions'
import SetupGame from './SetupGame'
import Game from './Game'
import Results from './Results'
import GameEnd from './GameEnd'
import Lobby from './Lobby'

import socket from '../api/socket'

import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Start game from Lobby
    socket.on('all players in', () => {
      this.props.dispatch({
        type: 'START_GAME'
      })
    })

    // Get new question (from Results and GameEnd)
    socket.on('new question', () => {
      this.props.dispatch({
        type: 'START_GAME'
      })
      this.props.dispatch({
        type: 'CLEAR_PR_STATE'
      })
    })

    // Get final results (from Results to GameEnd)
    socket.on('end game', () => {
      this.props.dispatch({
        type: 'INCREMENT_PAGE'
      })
    })

    // Return to main menu page (from GameEnd to Welcome)
    socket.on('main menu', () => {
      this.props.dispatch({
        type: 'MAIN_MENU',
      })
    })
  }
  render() {
    return (
      <>
        < Results />
        < Game />  
        < Welcome />
        < SetupGame />
        < Instructions />    
        < GameEnd />      
        {/* {this.props.pageNumber == -1 && <Instructions />}
        {this.props.pageNumber == 0 && <Welcome />}
        {this.props.pageNumber == 1 && <SetupGame />}
        {this.props.pageNumber == 2 && <Lobby />}
        {this.props.pageNumber == 3 && <Game />}
        {this.props.pageNumber == 4 && <Results />}
        {this.props.pageNumber == 5 && <GameEnd />} */}
      </>
    )
  }


}

function mapStateToProps(state) {
  return {
    pageNumber: state.pageNumber
  }
}

export default connect(mapStateToProps)(App)
