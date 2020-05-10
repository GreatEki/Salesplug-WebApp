const express = require('express');

//Initialise express
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	res.status(200).json({
		message: 'Server running',
	});
});

module.exports = app;
