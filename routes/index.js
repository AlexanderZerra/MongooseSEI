const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is MOVIES'))

router.post('/movies', controllers.createMovie)

router.get('/movies/:id', controllers.getMovieById)
router.get('/movies', controllers.getAllMovies)

router.put('/movies/:id', controllers.updateMovie)

router.delete('/movies/:id', controllers.deleteMovie)

module.exports = router
