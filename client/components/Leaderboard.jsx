import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

// import ResultSplash from './ResultSplash'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  

  render() {
    
      return (
        <div>
          <h1>Quizzical</h1>
          <h3>Leaderboard</h3>

          
        </div>

      )

    }

}

// function mapStateToProps(state) {
//   return {

//   }
// }

export default connect()(Leaderboard)
