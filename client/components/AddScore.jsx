import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

class AddScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            buttonClicked: false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitScore = () => {
        // let teamScore = this.props.score.correct / this.props.score.total * 100
        if(this.state.buttonClicked == true){
            // do nothing
        }
        else{
            let teamScore = this.props.score.points
            socket.emit('add to leaderboard', { teamName: this.state.team, teamCode: this.props.teamName, teamSize: this.props.players.length, teamScore: teamScore })
            this.setState({
                buttonClicked:true
            })
        }
    }

    playAgain = () => {
        socket.emit('reset game', this.props.teamName)
        socket.emit('all players in', { teamName: this.props.teamName, numOfPlayers: this.props.players.length })
    }

    mainMenu = () => {
        socket.emit('reset game', this.props.teamName)
        socket.emit('main menu', this.props.teamName)
    }

    render() {
        return (
            <div className="leaderboard">
                <h1 className="leaderboard-gameTitle">Quizzical</h1>
                <h1 className="leaderboard-title">Add Score to Leaderboard</h1>

                <p className="leaderboard-team">Team name:</p>
                <input className="leaderboard-team__field" name="team" onChange={this.handleChange} />
                <h3 className="leaderboard-team__score">Your Score: {this.props.score.correct / this.props.score.total * 100}%</h3>

                <div className='home-btns'>
                    <div className='home-btns__btn' onClick={this.submitScore}>Submit Score</div>
                </div>

                <section className='leaderboard-btnSection'>
                    <div className='setup-btns__btn' onClick={this.playAgain}>Play Again</div>
                    <div className='home-btns__btn' onClick={this.mainMenu}>Main menu</div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        players: state.players,
        teamName: state.teamName,
        score: state.score
    }
}

export default connect(mapStateToProps)(AddScore)