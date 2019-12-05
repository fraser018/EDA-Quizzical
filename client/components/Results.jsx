import React from 'react'
import { connect } from 'react-redux'
import socket from '../api/socket'

import ResultSplash from './ResultSplash'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        if(this.props.playerResponses[0]){
            if (this.props.playerResponses[0].selectedAnswer == this.props.playerResponses[0].correctAnswer) {
                socket.emit('score', { score: 1, teamName: this.props.teamName })
            }
            else {
                socket.emit('score', { score: 0, teamName: this.props.teamName })
            }
        }
        setTimeout(() => {
            this.setState({
                showResults: true
            })
        }, 2000)
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

        if (!this.state.showResults){
            return < ResultSplash />
        }
        else {
            return (
                <div>

                    {response != undefined ? <div>
                        <h2>{response.question}</h2>
                        
                        {response.correctAnswer == response.selectedAnswer ?
                            <div>
                                <h3>Correct: {response.correctAnswer}</h3></div> :
                            <div>
                                <h3>Incorrect: {response.selectedAnswer}</h3>
                                <h3>Correct: {response.correctAnswer}</h3>
                            </div>
                        }
    
                    </div>:
                    <div>
                        <h3>Be quicker next time!</h3>  
                    </div>}
                    {this.props.player.captain && <button onClick={this.nextQuestion}>Next Question</button>}
                    {this.props.player.captain && <button onClick={this.endGame}>End Game</button>}
    
                </div>
            )
        }        
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
