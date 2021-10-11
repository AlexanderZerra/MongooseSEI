import './App.css'

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ApiClient from './Globals'

// import MovieCard from './component/MovieCard'
import Nav from './component/Nav'

import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import MovieForm from './pages/MovieForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    this.getAllMovies()
  }

  getAllMovies = async () => {
    try {
      const res = await ApiClient.get('/movie')
      console.log(res)
      this.setState({ movies: res.data.movies })
    } catch (error) {
      throw error
    }
  }

  createMovie = async () => {
    try {
      const res = await ApiClient.post('/movie')
      console.log(res)
      this.setState({ movies: res.data.movies })
    } catch (error) {
      throw error
    }
  }

  handleSubmit = async (e, form) => {
    e.preventDefault()
    try {
      const res = await ApiClient.post('/movie', form)
      console.log(res)
      this.setState({
        movies: [res.data.movie, ...this.state.movies]
      })
    } catch (error) {
      throw error
    }
  }

  selectMovie = (movie) => {
    console.log(movie)
    this.setState({ selectedMovie: movie })
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/new"
            component={(props) => (
              <MovieForm {...props} handleSubmit={this.handleSubmit} />
            )}
          />
          <Route
            path="/movies"
            component={(props) => (
              <MovieDetails
                {...props}
                getAllMovies={this.getAllMovies}
                movies={this.state.movies}
              ></MovieDetails>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
