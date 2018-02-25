
var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
  mypost: String,
  name: String
});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');
