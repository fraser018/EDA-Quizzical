import React from 'react'
import { connect } from 'react-redux'

class GameEnd extends React.Component {
  constructor(props){
    super(props)
  }

  playAgain = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'START_GAME',
    })
  }

  render(){
    return(
      <>
      <h1>Congrats, you played our game and survived!</h1>
      <h2>{this.props.teamName}</h2>
      {/* <p>you got 7 out of 10 answers correct </p> from redux number of correct and false responses */}
      <button onClick={this.playAgain}>Play again!!</button>
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    teamName: state.teamName,
  }
}

export default connect(mapStateToProps)(GameEnd)