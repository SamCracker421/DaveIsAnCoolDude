let board;
function getEvents(){
    fetch(`/game`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',}
            
        })
        .then(res => res.json())
        .then(data => {
            board=data;
        })
        .catch(error => {
            console.log(error);
        })
}
getEvents();

  let c = document.getElementById("canvasthing");
  c.width = 1000;
  c.height = 900;
  let context = c.getContext("2d");
console.log(board);
  function cheese() {
    for (let row = 0; row < 6; row++) {
      for (let column = 0; column < 7; column++) {
        context.beginPath()
        x = 100 * column + 50;
        y = 100 * row + 50;
        context.arc(x, y, 50, 0, Math.PI * 2);
        if (board[row][column] == 1) {
          context.style = 'red';
        } else if (board[row][column] == 2) {
          context.style = 'yellow';
        } else {
          context.style = 'black';
        }
        context.stroke();
      }
    }
  }
  cheese();