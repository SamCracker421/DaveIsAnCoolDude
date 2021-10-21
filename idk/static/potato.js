let frames=0;
let key;
let bee;
let speed={};
let score=0;
let snakebody=[];
let recentpos=[];
speed.y=0;
speed.x=0;
let position={};
position.x=100;
position.y=100;

var c = document.getElementById("cheddar");
var ctx = c.getContext("2d");

window.addEventListener('keydown', function (e) {
    key = e.keyCode;
})
window.addEventListener('keyup', function (e) {
    key = false;
})

if(key==69){
    console.log(recentpos.length);
}

function clear(){
    ctx.clearRect(0, 0, 1000, 1000);
}

function drawfunction(){
    clear();
ctx.beginPath();
let pos;
if ( key == 37){
    if(speed.x!=5){
    speed.x =-5;
    speed.y =0;
    }
}
else if( key == 39){
    if(speed.x!=-5){
    speed.x =5;
    speed.y =0;
    }
}
else if( key == 38){
    if(speed.y!=5){
    speed.y =-5;
    speed.x =0;
}
}
else if ( key == 40) {
    if(speed.y!=-5){
    speed.y = 5;
    speed.x=0;
}
}

else if(key==false){
    speed=speed;
}
if(key==187){
    score=score+1;
}
else{score=score;}

if(recentpos.length>score){
    recentpos.pop()
}
pos=position
recentpos.unshift(pos);


position.x+=speed.x;
position.y+=speed.y;




snakebody=recentpos;

ctx.fillStyle = 'blue';
for(var i=0;i<snakebody.length;i++){
ctx.fillRect(snakebody[i].x,snakebody[i].y,5,5);
;}
snakebody=[];
ctx.fillStyle="green";
ctx.fillRect(position.x,position.y,5,5);
ctx.stroke();
frames+=1;
}
setInterval(drawfunction,1000/30);