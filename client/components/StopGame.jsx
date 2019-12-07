import React from 'react'
import {connect} from 'react-redux'
import { goToMainMenu, resetQuestions } from '../actions'

class StopGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h2>Oops it looks like somebody has closed their page!</h2>
        {this.props.players &&
          this.props.players.map(player => {
            return (
              <h3>{player} has left the game</h3>
            )
          })}
        <section>
          <div className='setup-btns__btn' onClick={()=>window.location.reload()}>
            Go back to main screen
                </div>
        </section>
      </>
    )
  }
}

export default connect()(StopGame)