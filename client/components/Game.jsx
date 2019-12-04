import React from 'react'
import {connect} from 'react-redux'
import {getQuestions} from '../api/game'
class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        //do api call and set question and answer in state
        getQuestions()
        .then(result =>{ 
            // DON'T DELETE CONSOLE.LOG -> some string chars need formatting - this will help us detect them
            console.log(result)
        })
    }

    render() {
        return (
            <div>
                <h1>Game Component</h1>
            </div>

        )
    }
}

// function mapStateToProps(state) {
//     return {
//         room: state.roomName,
//     }
// }

//export default connect(mapStateToProps)(Game)
export default Game