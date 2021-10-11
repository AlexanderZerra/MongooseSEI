const db = require('../db')
const { movie } = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const Movie = [
    { name: 'Terminator', description: 'Robots who fight for the future' },
    { name: 'Finding Nemo', descrption: 'Fish trying to find another fish' },
    { name: 'Jurassic Park', description: 'Amusment park about bad dinosaurs' }
  ]
  await Movie.insertMany(movies)
  console.log('Created Some Movies')
}
const run = async () => {
  await main()
  db.close()
}
run()
