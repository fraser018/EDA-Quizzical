import React from 'react'
import { connect } from 'react-redux'

import { addPlayerToTeam, getTeams, getPlayersByTeam } from '../api/users'
import socket from '../api/socket'

class Join extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player:'',
      team:''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase()
    })
  }

  getRandomUppercaseChar = () => {
    let r = Math.floor(Math.random() * 26);
    return String.fromCharCode(65 + r);
  }


  joinTeam = () => {
    getTeams().then(res => {
      
      this.setState({
        message: ''
      })
      if(this.state.team == ''){
        this.setState({
          message:'Please enter a valid team code'
        })
      }
      else if(this.state.player == ''){
        this.setState({
          message:'Please enter a username'
        })
      }
      else if (!res.text.includes(this.state.team)) {
        this.setState({
          message: 'This team does not exist, maybe you would like to create one?'
        })
      }
      else {
        getPlayersByTeam(this.state.team).then(res => {
          console.log(JSON.parse(res.text)[0].game_started)
          if(JSON.parse(res.text)[0].game_started){
            this.setState({
              message: 'This team has started playing without you!'
            })
          }
          else if (!JSON.parse(res.text).find(player => {
            return player.name == this.state.player
          })) {
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
      .then(players => {
        socket.emit('show players in lobby', players)
        this.props.dispatch({
          type: 'SAVE_PLAYER_DETAILS',
          playerInfo: {
            name: this.state.player,
            captain: captain,
            index: players.length - 1
          }
        })
      })

    this.props.dispatch({
      type: 'SAVE_TEAM_NAME',
      teamName: this.state.team
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
          <form>
            <section className='setup-team'>
              Team Name:
              <input
                className='setup-team__fields'
                type='text'
                name='team'
                onChange={this.handleChange}
                value={this.state.team}
              />
            </section>
            <section className='setup-user'>
              User Name:
              <input
                className='setup-user__fields'
                type='text'
                name='player'
                onChange={this.handleChange}
                value={this.state.player}
              />
            </section>
            <section>
              <div className='setup-btns__btn' onClick={this.joinTeam}>
                Join Team
                </div>
            </section>
            <div className='setup-btns__btn' onClick={(e) => this.props.changePage(e, 'create')}>
                Create Team
                </div>
            {this.state.message != '' && <h2>{this.state.message}</h2>}
          </form>
        </section>
      </main>
    )
  }
}

export default connect()(Join)