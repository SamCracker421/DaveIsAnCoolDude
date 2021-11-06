var socket=io();
once=true;
  
  document.addEventListener('keydown', function (event) {
      socket.emit('movement',event.which);
  });
  socket.emit('new player');
  
let c = document.getElementById("canvasthing");
let context = c.getContext("2d");

socket.on('state',function game(array){
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 7; column++) {
            context.beginPath()
            x = 100 * column + 50;
            y = 100 * row + 50;
            context.arc(x, y, 50, 0, Math.PI * 2);
            if (array[row][column] == 1) {
                context.fillStyle = 'red';
            } else if (array[row][column] == 2) {
                context.fillStyle = 'yellow';
            } else {
                context.fillStyle = 'black';
            }
            context.fill()
            context.stroke();
        }
    }
  })
