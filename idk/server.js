var express = require('express');
var app = express();
var port = 6969;

var server = require('http').createServer(app);
var io = require('socket.io')(server);


const path = require('path');
const { send } = require('process');


app.use('/static', express.static(__dirname + '/static'));
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

io.on('connection', function(client) {
    console.log('Client connected...');
    client.on('join', function(data) {
      console.log(data);
      client.emit('messages', 'Hello from server');
    });
});


server.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});

