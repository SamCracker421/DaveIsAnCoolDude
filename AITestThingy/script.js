let con=document.getElementById("canvasthingy");
let ctx=con.getContext('2d');
let pos={x:100,y:100};
let velocity={x:0,y:2};
let acc={x:0,y:0.4};
let death=false;
let blocks=[];

document.addEventListener('keydown',function (e) {
    if(e.which==38){
        pos.y+=-30
        velocity.y=2;
        console.log("up");
    }
});
function checkdeath(){
    if(pos.y>700 || pos.y<0){
        death=true;
    }
}
function createboxes(){
    let blockwithpos=[];
    let blockset=[];
    this.height=Math.floor(Math.random()*300)+10;
    blockset.push(height);
    this.height=600-blockset[0];
    blockset.push(height);
    blockwithpos.push(blockset);
    let position={x:500};
    blockwithpos.push(position);
    blocks.push(blockwithpos);
}
function drawboxes(){
    for(let i=0; i<blocks.length;i++){
    ctx.rect(blocks[0]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }
}

function draw(){
checkdeath();
if(death===false){
ctx.beginPath();
ctx.clearRect(0, 0, 500, 700);
ctx.rect(pos.x,pos.y,50,50);
ctx.fillStyle="red";
ctx.fill();
pos.y+=velocity.y;
velocity.y+=acc.y;
ctx.stroke();
}
else{
    let cheese=document.createElement('h1');
    cheese.innerText="You have Died";
    document.getElementById("cheddar").appendChild(cheese);
}
}
setInterval(draw,1000/30);

 