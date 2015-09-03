'use strict';
var express = require('express'),
	server = express(),
	port = process.env.PORT || 8000;

server.listen(port, function () {
	console.log("Servidor escuchando al puerto " + port);
});

require('./routers')(server);