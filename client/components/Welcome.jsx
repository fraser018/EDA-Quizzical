import React from 'react'
import { connect } from 'react-redux'
import Instructions from './Instructions'
import Create from './Create'
import Join from './Join'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "main"
    }
  }

  startClick = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'INCREMENT_PAGE'
    })
  }


  changePage = (event, page) => {
    event.preventDefault();
    this.setState({
      display: page
    })
  }

  render() {
    return (
      <>
        {this.state.display == "main" && <main>
          <section className='home'>
            <h1 className='home-gameTitle'>Quizzical</h1>
            <div className='home-logo'>
              <img className='home-logo__pic'
                src='./imgs/img-2.png'
                alt='logo'
              />
            </div>
            <div className='home-btns'>
              <div className='home-btns__btn' onClick={(e)=>this.changePage(e, 'create')}>
                Create team
                  </div>
              <div className='home-btns__btn' onClick={(e)=>this.changePage(e, 'join')}>
                Join team
                  </div>
              <div
                className='home-btns__btn'
                onClick={(e)=>this.changePage(e, 'instructions')}
              >
                How to play
                  </div>
            </div>
          </section>
        </main>}
        {this.state.display == "instructions" && <Instructions changePage={this.changePage} />}
        {this.state.display == "create" && <Create changePage={this.changePage}/>}
        {this.state.display == "join" && <Join changePage={this.changePage}/>}
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