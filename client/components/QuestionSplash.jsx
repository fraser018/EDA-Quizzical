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
      <div>
        <h1>Loading...</h1>
        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default connect()(QuestionSplash)
