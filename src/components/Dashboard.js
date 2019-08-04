import React, { Component } from 'react'
import { connect } from 'tls';

class Dashboard extends Component {
    state = {
        showAnswered: false
    }

    // showAnswered = () => {
    //     this,this.setState(()=> {

    //     })
    // }
    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, polls, users }) {
    const answers = users[authedUser].answers
    const answered = answers.map((id) => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp)

    const unanswered = Object.keys(polls)
        .filter((id) => !answers.includes(id))
        .map((id) => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp)

    return {
        answered,
        unanswered
    }
}

export default connect()(Dashboard)