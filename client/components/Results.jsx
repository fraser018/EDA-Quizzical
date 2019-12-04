import React from 'react'
import { connect } from 'react-redux'
// import { getQuestions } from '../api/game'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <h1>Results Component</h1>

            </div>
        )
    }
}

export default connect()(Results)
