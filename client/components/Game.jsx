import React from 'react'
import { connect } from 'react-redux'
// import { getQuestions } from '../../server/routes/questions'
class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // componentDidMount() {
    //     getQuestions()
    //         .then(result => {
    //             // DON'T DELETE CONSOLE.LOG -> some string chars need formatting - this will help us detect them
    //             console.log(result)
    //             this.setState({
    //                 question: result.question,
    //                 correctAnswer: result.correctAnswer,
    //                 incorrectAnswer1: result.incorrectAnswer1,
    //                 incorrectAnswer2: result.incorrectAnswer2,
    //                 incorrectAnswer3: result.incorrectAnswer3
    //             })
    //         })
    // }

    selectAnswer = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'SUBMIT_ANSWER',
            response:
            {
                question: this.props.questions.jumbledTrivias[this.props.player.index].question,
                correctAnswer: this.props.questions.jumbledTrivias[this.props.player.index].correctAnswer,
                selectedAnswer: event.target.id
            }
        })
        this.props.dispatch({
            type: 'INCREMENT_PAGE',
        })
    }

    render() {
        let q = this.props.questions
        return (
            <div>
                <h1>Game Component</h1>
                {q.trivias && <h2>{q.trivias[this.props.player.index].question}</h2>}
                {q.jumbledTrivias &&
                    <div className="btn-group">
                        <button id={q.jumbledTrivias[this.props.player.index].correctAnswer}
                            onClick={this.selectAnswer}>
                                {q.jumbledTrivias[this.props.player.index].correctAnswer}
                        </button>
                        <button id={q.jumbledTrivias[this.props.player.index].incorrectAnswer1}
                            onClick={this.selectAnswer}>
                                {q.jumbledTrivias[this.props.player.index].incorrectAnswer1}
                        </button>
                        <button id={q.jumbledTrivias[this.props.player.index].incorrectAnswer2}
                            onClick={this.selectAnswer}>
                                {q.jumbledTrivias[this.props.player.index].incorrectAnswer2}
                        </button>
                        <button id={q.jumbledTrivias[this.props.player.index].incorrectAnswer3}
                            onClick={this.selectAnswer}>
                                {q.jumbledTrivias[this.props.player.index].incorrectAnswer3}
                        </button>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player,
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Game)
