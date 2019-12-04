import React from 'react'
import Welcome from './Welcome'
import Instructions from './Instructions'
import SetupGame from './SetupGame'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
      < Welcome />
      <SetupGame />
      < Instructions />      
      </>
    )
  }


}

export default App
