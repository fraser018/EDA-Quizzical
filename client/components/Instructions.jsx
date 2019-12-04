import React from 'react'
import {connect} from 'react-redux'

class Instructions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    startGame = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'START_GAME'
        })
        // Need to change the pageNumber to = 1
    }

    render() {
        return (
            <div>
                <h1>Quizzle</h1>
                <h3>Instructions:</h3>
                <p>Step 1: Create your team! One player needs to go to the 'Start Game' page, and create a new game by entering in
                    the team name and their username.</p>
                <p>Step 2: Time for everyone else to join! All other players go to the 'Start Game' page and enter in the team name
                    and their username.</p>
                <p>Step 3: Check everyone is in! All players currently in game will display on the lobby page. Once everyone has
                    joined, the team captain (the player who created the team) clicks the 'Start Game' button.</p>
                <p>Step 4: Time to get answering questions. Each user will be able to see one question, and a list of four potential
                    answers. But here's the catch... your question does not match the answers you can see (or maybe it does... who
                    knows?!)! Your task - find the player whose answers match your question, and figure out the correct answer!
                    You'll need to be quick about it thought - and answer before the time runs out!</p>
                <button onClick={this.startGame}>Start Game</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        room: state.roomName,
    }
}



export default connect(mapStateToProps)(Instructions)