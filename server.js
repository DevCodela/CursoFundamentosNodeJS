'use strict';
var express = require('express'),
	server = express(),
	swig = require('swig'),
	port = process.env.PORT || 8000;

/* TEMPLATES */
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

/* STATIC FILES */
server.use(express.static(__dirname + '/public'));

server.listen(port, function () {
	console.log("Servidor escuchando al puerto " + port);
});

require('./routers')(server);