// server.js
var app = require('./app');
var cors = require('cors');

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

app.use(cors());
