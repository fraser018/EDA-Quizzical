import React from 'react'
import {connect} from 'react-redux'

import {addPlayerToTeam, getTeams, getPlayersByTeam} from '../api/users'
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

  createTeam = (event) => {
    event.preventDefault()
    getTeams().then((res) => {
      this.setState({
        message: ''
      })
      if (res.text.includes(this.state.team)) {
        this.setState({
          message: 'This team name is taken, please choose a different one.'
        })
      }
      else {
        this.addPlayerToTeam(true)
      }      
    })    
  }

  joinTeam = (event) => {
    event.preventDefault()
    getTeams().then(res => {
      this.setState({
        message: ''
      })
      if (!res.text.includes(this.state.team)) {
        this.setState({
          message: 'This team does not exist, maybe you would like to create one?'
        })
      }
      else {
        getPlayersByTeam(this.state.team).then(res => {
          if (!JSON.parse(res.text).find(player=>{
            return player.name == this.state.player
          })){
            this.addPlayerToTeam(false)
          }
          else {
            this.setState({
              message: 'This username is taken - please pick a new one.'
            })
          }
        })
      }
    })    
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
      <main>
        <section className='setup'>
          <h1 className='setup-gameTitle'>Quizzical</h1>
          <h1 className='setup-create'>Create A Game</h1>
          <form>
            <section className='setup-team'>
              Team Name:
              <input
                className='setup-team__fields'
                type='text'
                name='team'
                onChange={this.handleChange}
              />
            </section>
            <section className='setup-user'>
              User Name:
              <input
                className='setup-user__fields'
                type='text'
                name='player'
                onChange={this.handleChange}
              />
            </section>

            <div className='setup-btns'>
              <section>
                <div className='setup-btns__btn' onClick={this.createTeam}>
                  Create Team
                </div>
              </section>
              <section>
                <div className='setup-btns__btn' onClick={this.joinTeam}>
                  Join Team
                </div>
              </section>
            </div>
            {this.state.message != '' && <h2>{this.state.message}</h2>}
          </form>
        </section>
      </main>
    )
  }
}

export default connect()(SetupGame)