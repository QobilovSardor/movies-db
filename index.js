const express = require('express');
require('dotenv').config();
const connectDB = require('./config/mongoConnect');

const server = express();

connectDB();

server.use(express.json());
server.use(express.urlencoded({ extended: true}));
 
server.use('/api/', require('./routers/apiRouters'))


// ! PORT OPTIONS
const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
	if(err) throw err;
	console.log(`listening on ${PORT}`);
});