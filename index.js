const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {
    style: '/css/style.css',
    game: '/js/game.js',
    phaser: 'https://cdn.jsdelivr.net/phaser/2.6.2/phaser.js'
  });
});

// app.get('/js/game.js', function(req, res) {
//   res.contentType('game.js');
//   res.sendFile('/js/game.js');
// });

// app.get('/css/style.css', function(req, res) {
//   res.contentType('style.css');
//   res.sendFile('/css/style.css');
// });

app.listen(port, function() {
  console.log('Server started on port 3000');
});