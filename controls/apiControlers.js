const Movies = require('../modules/movieModel');

const getAllMovies = async (req, res) => {
	try {
		const movies = await Movies.find()
		res.json(movies)
	} catch (error) {
		console.log(error);
	}
}

const createMovies = async (req, res) => {
	try {
		const { name, country, dateOf, genre, language, continuity, img } = req.body;
		const movies = await Movies.create({ name, country, dateOf, genre, language, continuity, img })
		res.json(movies)
	} catch (error) {
		console.log(error);
	}
}

const deleteMovies = async (req, res) => {
	try {
		const deleteMovies = await Movies.findByIdAndDelete(req.params.id)
		res.json(deleteMovies)
	} catch (error) {
		console.log(error);
	}
}

module.exports = { getAllMovies, createMovies, deleteMovies };