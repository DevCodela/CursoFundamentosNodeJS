'use strict';
var qt = require('quickthumb');

var config = function (server) {

	server.use(function (req, res, next) {
		req.MEDIA_URL = 'http://localhost:8000/media';
		next();
	});
	server.use(qt.static(__dirname + '/../../'))
};

module.exports = config;