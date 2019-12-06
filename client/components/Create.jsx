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

  generateCode = (e) => {
    let prefix = new Array(2).fill().map(() => this.getRandomUppercaseChar()).join(""),
      integer = Math.floor((Math.random() * 999) * 7);
    let code = prefix + integer
    this.setState({
      team: code
    })
    getTeams().then(teams=>{
      if(teams.text.includes(code)){
        console.log('hi')
        this.generateCode()
      }
      else{
        return code
      }
    })
  }


  createTeam = (event) => {
    this.addPlayerToTeam(true)
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

  render() {
    return (

      <main>
        <section className='setup'>
          <h1 className='setup-gameTitle'>Quizzical</h1>
          <h1 className='setup-create'>Create A Game</h1>
          <form>
            <div className='setup-btns'>
              <input name="captainName" onChange={this.handleChange} value={this.state.captainName}/>
                <section>
                  <div className='setup-btns__btn' onClick={this.createTeam}>
                    Create Team
                </div>
                </section>
                <section>
                  <div className='setup-btns__btn' onClick={this.generateCode}>
                    Generate Team
                </div>
                </section>
                <h1>{this.state.team}</h1>
            </div>
              {this.state.message != '' && <h2>{this.state.message}</h2>}
          </form>
        </section>
      </main>

        )
      }
    }
    
export default connect()(Create)