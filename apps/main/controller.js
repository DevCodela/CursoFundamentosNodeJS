'use strict';
var express = require('express'),
	router = express.Router();

router.route('/')

	.get(function (req, res) {
		res.render('main/index.html');
	});

module.exports = router;