const {
    info
} = require('console');
var express = require('express');
const {
    platform
} = require('os');
var app = express();
var port = 6969;

var server = require('http').createServer(app);
var io = require('socket.io')(server);

const path = require('path');
const {
    send
} = require('process');


app.use('/static', express.static(__dirname + '/static'));
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

io.on('connection', function (socket) {
    socket.on('disconnect', function () {
        delete players[socket.id];
    });
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
                    socket.emit('fuckyou');
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

server.listen(port, () => {
    console.log(`Snake Server at http://localhost:${port}`)
});

setInterval(function () {
    io.sockets.emit('state', players,apples);
}, 1000 / 30);