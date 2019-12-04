import React from 'react'

class SetupGame extends React.Component {
  constructor(props) {
    super(props)
    this.state ={

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    componentDidMount() {

    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
      console.log(this.state)
    }

    handleSubmit(event) {
      event.preventDefault()
    }

  render() {
    return (
      <>
      <h1>Create A Game</h1>
        <form onSubmit={this.handleSubmit}>

          <section>
            Team Name:
            <input type="text" name="team" onChange={this.handleChange}/>
          </section>
          <section>
            User Name:
            <input type="text" name="user"/>
          </section>

          <section>
            <button>Join Team</button>
          </section>
          <section>
            <button>Create Team</button>
          </section>

        </form>


      </>

    )
  }
}

export default SetupGame