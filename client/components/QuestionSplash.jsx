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
            <h1 className='loading-text'>Loading...</h1>
          </div>
        </div>
      </main>
    )
  }
}

export default connect()(QuestionSplash)
