var express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
  res.send('Hello World! send from server.js');
});
*/
app.use('/',express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('main app listening on port 3000!');
});
