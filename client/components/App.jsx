import React from 'react'
import Instructions from './Instructions'
import SetupGame from './SetupGame'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
      <SetupGame />
      < Instructions />
      </>
    )
  }

}

export default App
