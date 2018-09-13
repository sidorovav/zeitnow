var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Андрей, спасибо, что помог найти этот сервис!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});