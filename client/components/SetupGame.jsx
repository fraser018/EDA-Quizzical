import React from 'react'
import {connect} from 'react-redux'

import {addPlayerToTeam, getTeams} from '../api/users'
import socket from '../api/socket'


class SetupGame extends React.Component {
  constructor(props) {
    super(props)
    this.state ={

    }
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  joinTeam = (event) => {
    event.preventDefault()
    // getTeams().then()
    this.addPlayerToTeam(false)
  }

  createTeam = (event) => {
    event.preventDefault()
    this.addPlayerToTeam(true)
  }

  addPlayerToTeam = (captain) => {
    socket.emit('join team', this.state.team)
    addPlayerToTeam(this.state.player, this.state.team, captain)
      .then(players=>{
        socket.emit('show players in lobby', players)
        this.props.dispatch({
          type: 'SAVE_PLAYER_DETAILS',
          playerInfo: {
            name: this.state.player,
            captain: captain,
            index: players.length -1
          }
        })
      })

    this.props.dispatch({
      type: 'SAVE_TEAM_NAME',
      teamName : this.state.team
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
            <input type='text' name='player' onChange={this.handleChange} />
          </section>

          <section>
            <button onClick={this.createTeam}>Create Team</button>
          </section>
          <section>
            <button onClick={this.joinTeam}>Join Team</button>
          </section>

        </form>
      </>
    )
  }
}

export default connect()(SetupGame)