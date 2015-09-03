'use strict';
var router_main = require('../apps/main/controller'),
	router_user = require('../apps/user/controller'),
	router_book = require('../apps/book/controller');

var routers = function (server) {
	server.use('/', router_main);
	server.use('/', router_user);
	server.use('/', router_book);
};

module.exports = routers;