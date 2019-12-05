import React from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../api/game'
import socket from '../api/socket'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    nextQuestion = (event) => {
        event.preventDefault()
        socket.emit('new question', { teamName: this.props.teamName, numOfPlayers: this.props.players.length })
    }

    endGame = (event) => {
        event.preventDefault()
        socket.emit('increment pages', this.props.teamName)
    }

    render() {
        let response = this.props.playerResponses[0]
        return (
            <div>
                <h1>Results Component</h1>
                {response != undefined && <div>
                    <h2>{response.question}</h2>

                    {response.correctAnswer == response.selectedAnswer ?
                        <div>
                            <h3>Correct: {response.correctAnswer}</h3></div> :
                        <div>
                            <h3>Incorrect: {response.selectedAnswer}</h3>
                            <h3>Correct: {response.correctAnswer}</h3>
                        </div>
                    }

                </div>}
                {this.props.player.captain && <button onClick={this.nextQuestion}>Next Question</button>}
                {this.props.player.captain && <button onClick={this.endGame}>End Game</button>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        teamName: state.teamName,
        playerResponses: state.playerResponses,
        player: state.player,
        players: state.players
    }
}

export default connect(mapStateToProps)(Results)
