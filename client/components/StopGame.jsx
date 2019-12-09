import React from 'react'
import {connect} from 'react-redux'
import { goToMainMenu, resetQuestions } from '../actions'

class StopGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="lobby">
        <h1 className='lobby-gameTitle'>Quizzical</h1>
        <h2 className='lobby-title'>Oops it looks like somebody has closed their page!</h2>
        {this.props.players &&
          this.props.players.map(player => {
            return (
              <h3 className="lobby-users__name">{player} has left the game</h3>
            )
          })}
        <section>
          <div className='lobby-btn' onClick={()=>window.location.reload()}>
            Go back to main screen
                </div>
        </section>
      </div>
    )
  }
}

export default connect()(StopGame)