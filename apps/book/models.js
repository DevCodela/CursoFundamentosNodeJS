'use strict';
var mongoose = require('../../config/mongoose'),
	bookSchema = require('./schemas').bookSchema;

var models = {

	Book : mongoose.model('book', bookSchema)

};

module.exports = models;