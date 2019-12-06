import React from 'react'
import { connect } from 'react-redux'

import { addPlayerToTeam, getTeams} from '../api/users'
import socket from '../api/socket'

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

  generateCode = () => {
    // e.preventDefault()
    let prefix = new Array(2).fill().map(() => this.getRandomUppercaseChar()).join(""),
      integer = Math.floor((Math.random() * 999) * 7);
    let newCode = prefix + integer
    this.setState({
      team: newCode
    })

    return prefix + integer;
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

  addPlayerToTeam = (captain) => {
    socket.emit('join team', this.state.team)
    addPlayerToTeam(this.state.captainName, this.state.team, captain)
      .then(players => {
        socket.emit('show players in lobby', players)
        this.props.dispatch({
          type: 'SAVE_PLAYER_DETAILS',
          playerInfo: {
            name: this.state.captainName,
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

  componentDidMount(){
    this.generateCode()
  }

  render() {
    return (

      <main>
        <section className='setup'>
          <h1 className='setup-gameTitle'>Quizzical</h1>
          <h1 className='setup-create'>Game Created</h1>
                <h1>Team Code:</h1>
                <h1>{this.state.team}</h1>
                <p>Give this code to your team</p>
        </section>

        <section className='setup'>
          <p>Enter your player name below:</p>
              <input name="captainName" onChange={this.handleChange} value={this.state.captainName}/>
                
          <form>
            <div className='setup-btns'>
                <section>
                  <div className='setup-btns__btn' onClick={this.createTeam}>
                    Create Team
                </div>
                </section>
            </div>
            <section>
              <p>Or click below to join another team:</p>
                  <div className='setup-btns__btn' onClick={this.joinTeam}>
                    Join Team
                </div>
                </section>
              {this.state.message != '' && <h2>{this.state.message}</h2>}
          </form>
        </section>
      </main>

        )
      }
    }
    
export default connect()(Create)