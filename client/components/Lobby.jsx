import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

class Lobby extends React.Component{
  constructor(props){
    super(props)
    this.state={
      players:[]
    }
  }

  componentDidMount(){
    socket.on('show players in lobby', players=>{
      this.setState({
        players: players
      })
    })
    socket.on('all players in', ()=>{
      this.props.dispatch({
        type: 'ADD_ALL_PLAYERS',
        players: this.state.players
      })
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    socket.emit('all players in', {teamName:this.props.teamName, numOfPlayers: this.state.players.length})
  }

  render(){
    return (
      <main>
        <section className='lobby'>
          <h1 className='lobby-gameTitle'>Quizzical</h1>
          <h2 className='lobby-title'>
            Welcome {this.props.player.name} you are in team{' '}
            {this.props.teamName}
          </h2>
          {this.props.player.captain && (
            <div className='lobby-btn' onClick={this.handleClick}>
              all players are in!
            </div>
          )}

          <div className='lobby-users'>
            {this.state.players.length > 0 &&
              this.state.players.map(player => {
                return (
                  <h3 className='lobby-users__name' key={player.id}>{player.name} has joined the team!</h3>
                )
              })}
          </div>

        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    teamName : state.teamName,
    player : state.player,
  }
}

export default connect(mapStateToProps)(Lobby)