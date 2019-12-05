import React from 'react'
import { connect } from 'react-redux'

// import { getQuestions } from '../../server/routes/questions'
class QuestionSplash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (      
      <div>
        <h1>QuestionSplash</h1>
      </div>
    )
  }
}

export default connect()(QuestionSplash)
