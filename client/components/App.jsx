import React from 'react'
import Welcome from './Welcome'
import Instructions from './Instructions'
import SetupGame from './SetupGame'
import Game from './Game'
import GameEnd from './GameEnd'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
      < Game />  
      < Welcome />
      < SetupGame />
      < Instructions />    
      < GameEnd />      
      </>
    )
  }


}

export default App
