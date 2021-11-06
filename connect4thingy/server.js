const {
    sign
} = require('crypto');
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const port = 6969;

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

let x=0;

let players=[];
let array=createboard();
let turn=0;

function createboard(){
    let row=[];
    for(let x=0; x<6;x++){
        let column=[];
        for(let y=0; y<7;y++){
            column.push(0);
        }
        row.push(column);
    }
    return row;
}


io.on('connection', function (socket) {
    socket.on('disconnect', function () {
        delete players[socket.id];
    });
});
io.on('connection', function (socket) {
socket.on('movement', function (data) {
let cheese;
let key;
console.log(data);
switch(data){
    case 49:
    key=0;
    break;
    case 50:
    key=1;
    break;
    case 51:
    key=2;
    break;
    case 52:
    key=3;
    break;
    case 53:
    key=4;
    break;
    case 54:
    key=5;
    break;
    case 55:
    key=6;
    break;
    default:
    key=-1;
    break;
}
if(key!=-1){
    if(x%2==0){
        cheese=1;
    }
    else{
        cheese=2;
    }
    for(let y=0; y<array.length;y++){
        if(array[y][key]===0){
            if(y!=array.length-1){
                if(array[y+1][key]!=0){
                    array[y][key]=cheese;
            
                }
            }
            else if(y==array.length-1){
                array[y][key]=cheese;
            }
        }
        else if(array[0][key]!=0){
            x--;
        }
    
        console.log(key);
    }  
}
x++;
});
});



setInterval(function () {
    io.sockets.emit('state', array);
}, 1000 / 30);


server.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});