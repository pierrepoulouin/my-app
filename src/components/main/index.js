import React from 'react'

import Users from '../users/'
import Players from '../players/'
import Starwars from '../starwars/'

import './main.css'

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      submit: false,
      errorMessage: '',
    }
  }

  handleUsernameOnChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  handlePasswordOnChange(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      submit: true,
    })

    setTimeout(() => {
      this.setState({
        submit: false,
      })
    }, 1000)
  }

  render() {
    return (
      <main>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleUsernameOnChange(e)}
          />

          <label>password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.handlePasswordOnChange(e)}
          />
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {this.state.submit && <div className="spinner" />}

        <Users />

        {/* <Players date={'vendredi'} /> */}
        <Starwars />
      </main>
    )
  }
}
