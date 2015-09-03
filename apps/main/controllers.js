'use strict';
var express = require('express'),
	router = express.Router();

router.route('/')

	.get(function (req, res) {
		res.send('Hello World');
	});

module.exports = router;