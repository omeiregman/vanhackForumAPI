var express = require('express');
var app = express();
var db = require('./db');

var PostController = require('./Post/PostController');
app.use('/posts', PostController);

module.exports = app;
