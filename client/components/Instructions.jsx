import React from 'react'
import {connect} from 'react-redux'

export class Instructions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
          <main>
            <section className='home'>
              <h1 className='home-gameTitle'>Quizzical</h1>
              <div className='instruct'>
                <h3 className='instruct-subTitle'>Instructions:</h3>
                <div className='instruct-info'>
                  <p className='instruct-info__step'>Step 1:</p>
                  <p>
                    Create your team! One player needs to go to the 'Start Game'
                    page, and create a new game by entering in the team name and
                    their username.
                  </p>
                  <p className='instruct-info__step'>Step 2:</p>
                  <p>
                    Time for everyone else to join! All other players go to the
                    'Start Game' page and enter in the team name and their
                    username.
                  </p>
                  <p className='instruct-info__step'>Step 3: </p>
                  <p>
                    Check everyone is in! All players currently in game will
                    display on the lobby page. Once everyone has joined, the
                    team captain (the player who created the team) clicks the
                    'Start Game' button.
                  </p>
                  <p className='instruct-info__step'>Step 4: </p>
                  <p>
                    Time to get answering questions. Each user will be able to
                    see one question, and a list of four potential answers. But
                    here's the catch... your question does not match the answers
                    you can see (or maybe it does... who knows?!)! Your task -
                    find the player whose answers match your question, and
                    figure out the correct answer! You'll need to be quick about
                    it thought - and answer before the time runs out!
                  </p>
                </div>
                <div className='home-btns__btn' onClick={(e)=>this.props.changePage(e, 'main')}>
                  Go Back
                </div>
              </div>
            </section>
          </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        room: state.roomName,
    }
}

export default connect(mapStateToProps)(Instructions)