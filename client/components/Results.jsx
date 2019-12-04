import React from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../api/game'
// import { getQuestions } from '../api/game'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // componentDidMount = () => {
    //     if (this.props.playerResponses[0].correctAnswer == this.props.playerResponses[0].selectedAnswer){
    //         this.setState({
    //             correct: true
    //         })
    //     }
    // }

    // display question again

    // is selected answer correct
    // if true - display selected answer with a green border
    // if false - display selected answer with a red border, and display correct answer in grey border

    nextQuestion = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'START_GAME',
        })
    }

    endGame = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'INCREMENT_PAGE',
        })
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
                    </div>}

                </div>}
                <button onClick={this.nextQuestion}>Next Question</button>
                <button onClick={this.endGame}>End Game</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        teamName: state.teamName,
        playerResponses: state.playerResponses

    }
}

export default connect(mapStateToProps)(Results)
