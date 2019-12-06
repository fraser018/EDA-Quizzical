import React from 'react'
import { connect } from 'react-redux'

class QuestionSplash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <main>
        <div className='loading'>
          <h1 className='loading-gameTitle'>Quizzical</h1>
          <div className='loading-art'>
            <div className='lds-grid'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1 className='loading-text'>Loading Question {this.props.roundCount}...</h1>
          </div>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    roundCount: state.roundCount
  }
}

export default connect(mapStateToProps)(QuestionSplash)
