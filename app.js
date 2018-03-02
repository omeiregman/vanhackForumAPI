var express = require('express');
var app = express();
var db = require('./db');

var PostController = require('./Post/PostController');

app.use('/posts', PostController);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;
