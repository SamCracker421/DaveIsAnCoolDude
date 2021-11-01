var socket = io();
let snakebody = [];
var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}

document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;

      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
    case 69:
      movement.e=true;
      break;
  }
});
document.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
    case 69:
      movement.e=false;
      break;
  }
});




socket.emit('new player');
setInterval(function () {
  socket.emit('movement', movement);
}, 1000 / 60);

socket.on('fuckyou', function() {
location.reload();
});
function clear() {
  ctx.clearRect(0, 0, 1000, 1000);
}

var c = document.getElementById("cheddar");
var ctx = c.getContext("2d");

socket.on('state',function (players,apples){
  clear();
  for(var id in players){
    var player=players[id];
    ctx.beginPath();
    snakebody=player.recentpos;
    ctx.fillStyle = 'blue';
    for(id in apples){
      var apple=apples[id];
      ctx.fillStyle="red";
      ctx.fillRect(apple.x,apple.y,10,10);
    }
    for (var i = 0; i < snakebody.length; i++) {
      ctx.fillRect(snakebody[i].x, snakebody[i].y, 10, 10);;
    }
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, 10, 10);
    snakebody = [];
  }

})
