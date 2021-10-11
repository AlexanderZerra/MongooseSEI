const mongoose = require('mongoose')
const MovieSchema = require('./movie')

const Movie = mongoose.model('movies', MovieSchema)

module.exports = {
  Movie
}
