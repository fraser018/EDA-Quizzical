import React from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../api/game'
class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        getQuestions()
            .then(result => {
                // DON'T DELETE CONSOLE.LOG -> some string chars need formatting - this will help us detect them
                console.log(result)
                this.setState({
                    question: result.question,
                    correctAnswer: result.correctAnswer,
                    incorrectAnswer1: result.incorrectAnswer1,
                    incorrectAnswer2: result.incorrectAnswer2,
                    incorrectAnswer3: result.incorrectAnswer3
                })
            })
    }

    selectAnswer = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'SUBMIT_ANSWER',
            response: 
            {
                question: this.state.question,
                correctAnswer: this.state.correctAnswer,
                selectedAnswer: event.target.id
            } 
        })
    }

    render() {
        return (
            <div>
                <h1>Game Component</h1>
                <h2>{this.state.question}</h2>
                <div className="btn-group">
                    <button id={this.state.correctAnswer} onClick={this.selectAnswer}>{this.state.correctAnswer}</button>
                    <button id={this.state.incorrectAnswer1} onClick={this.selectAnswer}>{this.state.incorrectAnswer1}</button>
                    <button id={this.state.incorrectAnswer2} onClick={this.selectAnswer}>{this.state.incorrectAnswer2}</button>
                    <button id={this.state.incorrectAnswer3} onClick={this.selectAnswer}>{this.state.incorrectAnswer3}</button>
                </div>
            </div>
        )
    }
}

export default connect()(Game)
