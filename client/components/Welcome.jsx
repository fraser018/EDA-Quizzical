import React from 'react'
import { connect } from 'react-redux'
// import socket from 'socket.io'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    startClick = (e) => {
        e.preventDefault()
        this.props.dispatch({
            type: 'INCREMENT_PAGE'
        })
    }

    instructClick = (e) => {
        e.preventDefault()
        this.props.dispatch({
            type: 'INSTRUCT'
        })
    }

    render() {
        return (
            <>
                <h1>WELCOME TO THE GAME</h1>
                <button onClick={this.startClick}>GET STARTED</button>
                <button onClick={this.instructClick}>INSTRUCTIONS</button>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        room: state.roomName,
        name: state.name
    }
}

export default connect(mapStateToProps)(Welcome)