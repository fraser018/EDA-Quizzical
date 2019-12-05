import React from 'react'
import { connect } from 'react-redux'

class ResultSplash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (      
      <div>
        <h1>Checking Results...</h1>
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      player: state.player
    }
  }

export default connect(mapStateToProps)(ResultSplash)
