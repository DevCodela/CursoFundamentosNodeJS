'use strict';
var express = require('express'),
	router = express.Router(),
	Book = require('../book/models').Book;

router.route('/')

	.get(function (req, res) {
		Book.find().exec()
		.then(function (books) {
			res.render('main/index.html', {books : books});
		})
	});

module.exports = router;