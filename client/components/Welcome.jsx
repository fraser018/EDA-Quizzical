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
            <main>
              <section className='home'>
                <h1 className='home-gameTitle'>Quizzical</h1>
                <div className='home-btns'>
                  <button className='home-btns__btn' onClick={this.startClick}>GET STARTED</button>
                  <button className='home-btns__btn' onClick={this.instructClick}>INSTRUCTIONS</button>
                </div>
              </section>
            </main>
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