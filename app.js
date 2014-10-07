var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/api/people', function(req, res) {
  // send back all of the people
  // TODO: don't use send here. there's something better
  // TODO: don't use a string here. there's something better
  res.send('{ people: [] }');
});
app.post('/api/people', function(req, res) {
  // create a new person
});

// test a post request:
// curl -X POST --data "name=Whit" \
//    http://localhost:3030/api/people/1
var server = app.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});

