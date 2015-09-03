'use strict';
var express = require('express'),
	router = express.Router();


router.route('/ingresar/')

	.get(function (req, res) {
		res.render('user/login.html');
	});


router.route('/registrar/')

	.get(function (req, res) {
		res.render('user/register.html');
	});

module.exports = router;