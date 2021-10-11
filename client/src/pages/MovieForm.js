import React, { Component } from 'react'
// import ApiClient from '../Globals'
// import Home from './Home'

export default class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: ''
    }
  }

  //Handle Change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handlePush = (e) => {
    this.props.handleSubmit(e, this.state)
    this.props.history.push('/movies')
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <header>
          <h1 className="forminfo">Movie Form</h1>
          <form onSubmit={(e) => this.handlePush(e)}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              placeholder="movie name"
            />
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              placeholder="please add description"
            />
            <button>Submit</button>
          </form>
        </header>
        <p className="informationstuff">Enter in all fields before Submit</p>
      </div>
    )
  }
}
