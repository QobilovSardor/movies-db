const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
		})
		console.log(`Connecting to ${process.env.MONGO_URL}`);

	} catch	(error) {
		console.log(error);
	}
}
module.exports = connectDB