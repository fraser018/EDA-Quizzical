import React from 'react'
import { connect } from 'react-redux'

import Countdown from './Countdown'

class QuestionSplash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        <main>
          <div className='loading'>
            <h1 className='loading-gameTitle'>Quizzical</h1>
            <h1 className='loading-text'>Loading Question {this.props.roundCount} / {this.props.totalRounds}</h1>
            <div className='loading-art'>
              <div className='lds-grid'>
                {this.props.questions.trivias ? <Countdown /> :
                  <>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </>}
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    roundCount: state.roundCount,
    totalRounds: state.totalRounds,
    questions: state.questions
  }
}

export default connect(mapStateToProps)(QuestionSplash)
