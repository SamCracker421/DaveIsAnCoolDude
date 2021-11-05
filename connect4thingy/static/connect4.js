document.addEventListener("keydown", cheedar);
let once=true;
document.addEventListener("keyup",()=>{once=true})
async function getEvents() {
    return await fetch('/game', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(error => {
            console.log(error);
        })
}
function cheedar(e) {
    function key(){
    once=false;
        switch (e.which) {
        case 49:
            return 1;
        case 50:
            return 2;
        case 51:
            return 3;

        case 52:
            return 4;

        case 53:
            return 5;

        case 54:
            return 6;

        case 55:
            return 7;

        default:
            return 0;
    }}
    if(once===true){
    fetch('/move', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        ,
            body: JSON.stringify({
                "key":key()
            }
                )
    })
        .then(res => res.json())
        .then(data => {
        })
        .catch(error => {
            console.log(error);
        })}
        else{
            console.log(intermediate);
        }
}

let c = document.getElementById("canvasthing");
c.width = 700;
c.height = 600;
let context = c.getContext("2d");

function cheese() {
    getEvents().then(iHateKneeGrows => {
        for (let row = 0; row < 6; row++) {
            for (let column = 0; column < 7; column++) {
                context.beginPath()
                x = 100 * column + 50;
                y = 100 * row + 50;
                context.arc(x, y, 50, 0, Math.PI * 2);
                if (iHateKneeGrows[row][column] == 1) {
                    context.fillStyle = 'red';
                } else if (iHateKneeGrows[row][column] == 2) {
                    context.fillStyle = 'yellow';
                } else {
                    context.fillStyle = 'black';
                }
                context.fill()
                context.stroke();
            }
        }
    })
}

setInterval(cheese,1000);