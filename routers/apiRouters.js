const {Router} = require('express');
const Movies = require('../modules/movieModel');

const { getAllMovies, createMovies, deleteMovies } = require('../controls/apiControlers')

const router = Router();
 
// * Get all movies
router.get('/movies', getAllMovies)

// ? Create a new movie POST request
router.post('/movies/create', createMovies)

// ! Delete movies
router.delete('/movies/delete/:id', deleteMovies)

module.exports = router