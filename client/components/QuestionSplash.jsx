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
        <h1>Loading Question {this.props.roundCount} ...</h1>
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    roundCount: state.roundCount
  }
}

export default connect(mapStateToProps)(QuestionSplash)
