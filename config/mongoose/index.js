'use strict';
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

module.exports = mongoose;