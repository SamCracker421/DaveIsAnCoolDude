const {
    sign
} = require('crypto');
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const port = 3000;

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

// Starts the server.
server.listen(port, function () {
    console.log(`Starting server on port ${port}`);
});

var players = {};
var apples = {};

io.on('connection', function (socket) {
    socket.on('new player', function (data) {
        data = unescape(data);
        players[socket.id] = {
            x: 100,
            y: 100,
            score: 0,
            speedx: 0,
            speedy: 0,
            recentpos: []
        }
        console.log(players);
        apples[socket.id] = {
            x: 500,
            y: 500,
        }
        console.log(apples);
    });

    socket.on('movement', function (data) {
        var player = players[socket.id] || {};
        if (data.left) {
            if (player.speedx != 5) {
                player.speedx = -5;
                player.speedy = 0;
            }
        }
        if (data.right) {
            if (player.speedx != -5) {
                player.speedx = 5
                player.speedy = 0;
            }
        }
        if (data.up) {
            if (player.speedy != 5) {
                player.speedy = -5;
                player.speedx = 0;
            }
        }
        if (data.down) {
            if (player.speedy != -5) {
                player.speedy = 5;
                player.speedx = 0;
            }
        }
        if (data.e) {
            player.score += 1;
        }

        player.x += player.speedx;
        player.y += player.speedy;
        player.recentpos.unshift({
            "x": player.x,
            "y": player.y
        });
        if (player.recentpos.length > player.score) {
            player.recentpos.pop()
        }

        for (var id in players) {
            for (var stupid in players[id].recentpos) {
                if ((Math.sqrt(Math.pow(player.x - players[id].recentpos[stupid].x, 2)) < 2 && Math.sqrt(Math.pow(player.y - players[id].recentpos[stupid].y, 2)) < 2.5) && players[id].recentpos != player.recentpos) {
                    socket.emit('');
                }
            }
        }
            for (var cheddar in apples) {
                if ((Math.sqrt(Math.pow(player.x - apples[cheddar].x, 2)) < 2.5 && Math.sqrt(Math.pow(player.y - apples[cheddar].y, 2)) < 2.5)) {
                    player.score+=1;
                    apples[cheddar].x=Math.floor((Math.random()*1000))+5;
                    apples[cheddar].y=Math.floor((Math.random()*1000))+5;
                }
            }
    })

});

setInterval(function () {
    io.sockets.emit('state', players,apples);
}, 1000 / 60);