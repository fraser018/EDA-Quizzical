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
                <div className='home-logo'>
                  <img className='home-logo__pic'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2O1b8CY6ZxPzZQP84Wxau5ZDFTdYiWS9EfknQHxCqSp4TX2iO'
                    alt='logo'
                  />
                </div>
                <div className='home-btns'>
                  <div className='home-btns__btn' onClick={this.startClick}>
                    GET STARTED
                  </div>
                  <div
                    className='home-btns__btn'
                    onClick={this.instructClick}
                  >
                    INSTRUCTIONS
                  </div>
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