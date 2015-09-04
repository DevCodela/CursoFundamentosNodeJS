'use strict';
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('../../apps/user/models').User;

var local = function (server) {

	passport.use(new LocalStrategy({
			usernameField : 'username',
			passwordField : 'password',
		},
		function (username, password, done) {
			User.findOne({ username : username}).exec()
			.then(function (user) {
				if (!user) {
					return done(null, false, {'message' : 'El username ' + username + ' no esta registrado!'});
				} else {
					if (user.password === password) {
						return done(null, user);
					};
				}
			});
		}
	));

	server.post('/login', passport.authenticate('local', {
			successRedirect : '/',
			failureRedirect : '/ingresar/',
			failureFlash : true,
	}))

};

module.exports = local;