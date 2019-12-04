import React from 'react'
import {connect} from 'react-redux'

import {addPlayerToTeam} from '../api/users'
import socket from '../api/socket'


class SetupGame extends React.Component {
  constructor(props) {
    super(props)
    this.state ={

    }
  }

    componentDidMount() {

    }

    handleChange = (event) =>  {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    joinTeam = (event) => {
      event.preventDefault()
      this.addPlayerToTeam(false)
    }

    createTeam = (event) => {
      event.preventDefault()
      this.addPlayerToTeam(true)
    }

    addPlayerToTeam = (captain) => {
      socket.emit('join team', this.state.team)
      this.props.dispatch({
        type: 'SAVE_TEAM_NAME',
        teamName : this.state.team
      })
      addPlayerToTeam(this.state.user, this.state.team, captain)
      this.props.dispatch({
        type: 'SAVE_NAME',
        name: this.state.user
      })
      this.props.dispatch({
        type: 'INCREMENT_PAGE',
      })
    }

  render() {
    return (
      <>
        <h1>Create A Game</h1>
        <form>
          <section>
            Team Name:
            <input type='text' name='team' onChange={this.handleChange} />
          </section>
          <section>
            User Name:
            <input type='text' name='user' onChange={this.handleChange} />
          </section>

          <section>
            <button onClick={this.joinTeam}>Join Team</button>
          </section>
          <section>
            <button onClick={this.createTeam}>Create Team</button>
          </section>
        </form>
      </>
    )
  }
}

export default connect()(SetupGame)