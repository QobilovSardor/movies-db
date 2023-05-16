const mongoose = require('mongoose')

const Movies = new mongoose.Schema(
	{
				name: {
					type: "string",
					required: true,
				},
				country: {
					type: "string",
					required: true,
					trim: true
				},
				dateOf: {
					type: "number",
					required: true,
				},
				genre: {
					type: "string",
					required: true,
				},
				language: {
					type: "string",
					required: true,
					trim: true,
				},
				continuity: {
					type: "string",
					required: true,
				},
				img: {
					type: "string",
					required: true,
				},
				updated_at: {
					type: Date,
					default: Date.now()
				},
				created_at: {
					type: Date, 
					default: Date.now()
				} 
	}
)

module.exports = mongoose.model('Movies', Movies) 