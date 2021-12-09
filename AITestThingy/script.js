let con = document.getElementById("canvasthingy");
let ctx = con.getContext('2d');
let pos = { x: 100, y: 100 };
let velocity = { x: 0, y: 2 };
let acc = { x: 0, y: 0.4 };
let death = false;
let blocks = [];
let score = 0;
let x=0;


function go_up(){
    pos.y += -30
    velocity.y = 2;
    console.log("up");
}

function checkdeath() {
    if (blocks.length > 0) {
        if (pos.y < blocks[0][0][1]+50) {
            
        }
        else if(pos.y > blocks[0][0][0]+50){
            go_up();
        }
    }
    else if(blocks.length==0){
        if(x%10==0){
            go_up();
        }
    }
    if (pos.y > 700 || pos.y < 0) {
        death = true;
    }
    for (let x = 0; x < blocks.length; x++) {
        if (pos.y < blocks[x][0][1] || pos.y < blocks[x][0][0]) {
            console.log("within Y limit");
            if (blocks[x][1].x < 150 && blocks[x][1].x > 50) {
                console.log("within x limit");
                death = true;
            }
        }
    }
    x=x+1
}
function createboxes() {
    let blockwithpos = [];
    let blockset = [];
    this.height = Math.floor(Math.random() * 300) + 10;
    blockset.push(height);
    this.height = 550 - blockset[0];
    blockset.push(height);
    blockwithpos.push(blockset);
    let position = { x: 500 };
    blockwithpos.push(position);
    blocks.push(blockwithpos);
}
function drawboxes() {
    for (let i = 0; i < blocks.length; i++) {
        ctx.beginPath();
        ctx.rect(blocks[i][1].x, 0, 100, blocks[i][0][1]);
        ctx.stroke();
        ctx.rect(blocks[i][1].x, 600, 100, blocks[i][0][0]);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        blocks[i][1].x = blocks[i][1].x - 3;
        if(blocks[i][1].x<-50){
            blocks.shift();
        }
    }
}

function draw() {
    checkdeath();
    document.getElementById("scorebox").innerText = score;
    if (death === false) {
        ctx.beginPath();
        
        ctx.clearRect(0, 0, 500, 700);
        ctx.rect(pos.x, pos.y, 50, 50);
        ctx.fillStyle = "red";
        ctx.fill();
        pos.y += velocity.y;
        velocity.y += acc.y;
        drawboxes();
        ctx.stroke();
        score = score + 1000 / 30;
    }
    // else{
    //     let cheese=document.createElement('h1');
    //     cheese.innerText="You have Died";
    //     document.getElementById("cheddar").appendChild(cheese);
    // }
}
setInterval(draw, 1000 / 30);
setInterval(createboxes, (1000 / 30) * 100);
