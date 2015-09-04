'use strict';
var express = require('express'),
	server = express(),
	swig = require('swig'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	flash = require('connect-flash'),
	RedisStore = require('connect-redis')(session),
	port = process.env.PORT || 8000;

/* BODY PARSER, COOKIES, SESSIONS */
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(session({
	store : new RedisStore({
			host : '127.0.0.1',
			port : 6379,
			db : 1
		}),
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));
server.use(flash());


/* PASSPORT  */
require('./config/passport')(server);

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

server.use(function(req, res, next){
	server.locals.user = req.user;
	next();
});

if (process.env.NODE_ENV === 'dev') {
	require('./config/server/local')(server);
};
if (process.env.NODE_ENV === 'prod') {
	require('./config/server/prod')(server);
};


require('./routers')(server);


