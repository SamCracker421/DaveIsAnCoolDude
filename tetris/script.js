let con = document.getElementById("canvasthingy");
let ctx = con.getContext('2d');
let pos = {x:5,y:5}
let ground=false;
let board=[];
let peices=[];
let peicenum=0;
let rotation=0;

for(let x=0;x<1000;x++){
peices.push(Math.floor(Math.random()*7)+1);
}
let peice=peices[0];
peices.push()
function drawboard(){
for(let x=0;x<20;x++){
let row=[];    
for(let y=0;y<10;y++){
row.push(0);
}
board.push(row);
}
}





document.addEventListener('keydown', function (event) {
    switch (event.which) {
      case 38:
          rotation+=1;
          break;

        case 37:
            pos.x-=1;
            break;
        case 39:
            pos.x+=1;
            break;
        case 40:
        pos.y+=1
        break;
    }});


function newpeice(){
peicenum+1;
peice=peices[peicenum]
pos={x:5,y:5};
}

// function ipeice(x,y){
// pos1:{    
// block1:board[y-0.5][x-0.5],
// block2:board[y+0.5][x-0.5],
// block3:board[y-1.5][x-0.5],
// block4:board[y+1.5][x-0.5]
// },
// pos2:{
// bloc1:board[y-0.5][x+1.5],
// block2:board[y-0.5][x-1.5],
// block3:board[y-0.5][x+0.5],
// block4:board[y-0.5][x-0.5]
// },
// pos3:{
// block1:board[y-0.5][x+0.5],
// block2:board[y+0.5][x+0.5],
// block3:board[y-1.5][x+0.5],
// block4:board[y+1.5][x+0.5],
// },
// pos4:{
// block1:board[y+0.5][x+1.5],
// block2:board[y+0.5][x-1.5],
// block3:board[y+0.5][x+0.5],
// block4:board[y+0.5][x-0.5]
// }
// }

function rightl(nowthingy,y,x){
if(rotation%4===0){
nowthingy[y][x]=1;
nowthingy[y][x-1]=1;
nowthingy[y][x+1]=1;
nowthingy[y-1][x+1]=1;
if(y===board.length-2){
    if(nowthingy[y+1][x]!=0 ||nowthingy[y+1][x+1]!=0 ||nowthingy[y+1][x-1]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-1){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
if(rotation%4===1){
nowthingy[y-1][x]=1;
nowthingy[y][x]=1;
nowthingy[y+1][x]=1;
nowthingy[y+1][x+1]=1;
if(y===board.length-3){
    if(nowthingy[y+2][x]!=0 ||nowthingy[y+2][x+1]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }

}
if(rotation%4===2){
nowthingy[y][x]=1;
nowthingy[y][x+1]=1;
nowthingy[y][x-1]=1;
nowthingy[y+1][x-1]=1;
if(y===board.length-3){
    if(nowthingy[y+1][x]!=0 ||nowthingy[y+1][x+1]!=0 ||nowthingy[y+2][x-1]){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
if(rotation%4===3){
nowthingy[y+1][x]=1;
nowthingy[y][x]=1;
nowthingy[y-1][x]=1;
nowthingy[y-1][x-1]=1;
if(y===board.length-3){
    if(nowthingy[y+2][x]!=0 ||nowthingy[y][x-1]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
}

function leftl(nowthingy,y,x){
if(rotation%4===0){
nowthingy[y][x]=2;
nowthingy[y][x-1]=2;
nowthingy[y][x+1]=2;
nowthingy[y+1][x+1]=2;
if(y===board.length-3){
    if(nowthingy[y+1][x]!=0 ||nowthingy[y+2][x+1]!=0 ||nowthingy[y+1][x-1]){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
if(rotation%4===1){
nowthingy[y-1][x]=2;
nowthingy[y][x]=2;
nowthingy[y+1][x]=2;
nowthingy[y+1][x-1]=2;
if(y===board.length-3){
    if(nowthingy[y+2][x]!=0 ||nowthingy[y+2][x-1]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
if(rotation%4===2){
nowthingy[y][x]=2;
nowthingy[y][x+1]=2;
nowthingy[y][x-1]=2;
nowthingy[y-1][x-1]=2;
if(y===board.length-3){
    if(nowthingy[y][x]!=0 ||nowthingy[y][x+1]!=0 ||nowthingy[y][x-1]){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
if(rotation%4===3){
nowthingy[y+1][x]=2;
nowthingy[y][x]=2;
nowthingy[y-1][x]=2;
nowthingy[y-1][x+1]=2;
if(y===board.length-4){
    if(nowthingy[y][x+1]!=0 ||nowthingy[y+2][x]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
    }
    else if(y===board.length-3){
        board=nowthingy;
        nowthingy=[];
        newpeice();   
    }
}
}

function greenzig(nowthingy,y,x){
if(rotation%4==0){
nowthingy[y][x]=3;
nowthingy[y-1][x]=3;
nowthingy[y-1][x-1]=3;
nowthingy[y][x+1]=3;
if(y===board.length-2){
if((nowthingy[y+1][x]==undefined || nowthingy[y][x-1]==undefined || nowthingy[y+1][x+1]==undefined)  || (nowthingy[y+1][x]!=0 || nowthingy[y][x-1]!=0 || nowthingy[y+1][x+1]!=0)){
board=JSON.parse(JSON.stringify(nowthingy));
nowthingy=[];
newpeice();
}
}
else if(y===board.length-1){
board=JSON.parse(JSON.stringify(nowthingy));
nowthingy=[];
newpeice();
}
}
if(rotation%4==1){
nowthingy[y][x]=3;
nowthingy[y+1][x]=3;
nowthingy[y][x+1]=3;
nowthingy[y-1][x+1]=3;
if(y===board.length-3){
if((nowthingy[y+2][x]!=0 ||nowthingy[y+1][x+1]!=0) || (nowthingy[y+2][x]===undefined ||nowthingy[y+1][x+1]===undefined)){
    board=nowthingy;
    nowthingy=[];
    newpeice();   
}
}
else if(y===board.length-2){
    board=nowthingy;
    nowthingy=[];
    newpeice();   
}
}
if(rotation%4==2){
nowthingy[y][x]=3;
nowthingy[y+1][x]=3;
nowthingy[y][x-1]=3;
nowthingy[y+1][x+1]=3;
if(y===board.length-2){
if((nowthingy[y+2][x]!=0 || nowthingy[y+1][x-1]!=0 || nowthingy[y+2][x+1]!=0) || (nowthingy[y+2][x]===undefined ||nowthingy[y+1][x+1]===undefined)){
    board=nowthingy;
    nowthingy=[];
    newpeice();   
}
}
else if(y===board.length-1){
    board=nowthingy;
    nowthingy=[];
    newpeice();   
}
}
if(rotation%4==3){
nowthingy[y][x]=3;
nowthingy[y][x-1]=3;
nowthingy[y-1][x]=3;
nowthingy[y+1][x-1]=3;
if(y===board.length-3){
if(nowthingy[y+1][x]!=0 || nowthingy[y+2][x-1]!=0){
    board=nowthingy;
    nowthingy=[];
    newpeice();
}
}
else if(y===board.length-2){
    board=nowthingy;
    nowthingy=[];
    newpeice();   
}
}
}

function redzig(nowthingy,y,x){
if(rotation%4===0){
nowthingy[y][x]=4;
nowthingy[y][x-1]=4;
nowthingy[y-1][x-1]=4;
nowthingy[y+1][x]=4;

if(y===board.length-3){
if(nowthingy[y+1][x-1]!=0||nowthingy[y+2][x]!=0){
    board=nowthingy;
    nowthingy=[];
    newpeice();
}
}
if(y===board.length-2){
    board=nowthingy;
    nowthingy=[];
    newpeice();
}
}
if(rotation%4===1){
nowthingy[y][x]=4;
nowthingy[y][x-1]=4;
nowthingy[y-1][x]=4;
nowthingy[y-1][x+1]=4;
if(y===board.length-2){
    if(nowthingy[y+1][x]!=0||nowthingy[y+1][x-1]!=0 || nowthingy[y][x+1]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
}
if(y===board.length-1){
    board=nowthingy;
    nowthingy=[];
    newpeice();
}
}
if(rotation%4===2){
nowthingy[y][x]=4;
nowthingy[y+1][x]=4;
nowthingy[y-1][x-1]=4;
nowthingy[y][x-1]=4;
if(y===board.length-3){
    if(nowthingy[y+2][x]!=0||nowthingy[y+1][x-1]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
}
if(y===board.length-2){
    board=nowthingy;
    nowthingy=[];
    newpeice();
}
}
if(rotation%4===3){
nowthingy[y][x]=4;
nowthingy[y][x+1]=4;
nowthingy[y+1][x]=4;
nowthingy[y+1][x-1]=4;
if(y===board.length-2){
    if(nowthingy[y+1][x+1]!=0||nowthingy[y+2][x-1]!=0 || nowthingy[y+2][x]!=0){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
}
if(y===board.length-1){
    board=nowthingy;
    nowthingy=[];
    newpeice();
}
}
}
function tpeice(nowthingy,y,x){
    if(rotation%4===0){
    nowthingy[y][x]=5;
    nowthingy[y-1][x]=5;
    nowthingy[y+1][x]=5;
    nowthingy[y][x-1]=5;
    if(y===board.length-3){
        if(nowthingy[y+1][x-1]||nowthingy[y+2][x]!=0){
            board=nowthingy;
            nowthingy=[];
            newpeice();
        }
    }
    if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
    }
    if(rotation%4===1){
    nowthingy[y][x]=5;
    nowthingy[y][x-1]=5;
    nowthingy[y][x+1]=5;
    nowthingy[y-1][x]=5;
    if(y===board.length-2){
        if(nowthingy[y+1][x+1]!=0||nowthingy[y+1][x-1]!=0 || nowthingy[y+1][x]!=0){
            board=nowthingy;
            nowthingy=[];
            newpeice();
        }
    }
    if(y===board.length-1){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
    }
    if(rotation%4===2){
    nowthingy[y][x]=5;
    nowthingy[y-1][x]=5;
    nowthingy[y+1][x]=5;
    nowthingy[y][x+1]=5;
    if(y===board.length-3){
        if(nowthingy[y+2][x]!=0||nowthingy[y+1][x+1]!=0){
            board=nowthingy;
            nowthingy=[];
            newpeice();
        }
    }
    if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
    }

    if(rotation%4===3){
    nowthingy[y][x]=5;
    nowthingy[y][x-1]=5;
    nowthingy[y][x+1]=5;
    nowthingy[y+1][x]=5;
    if(y===board.length-3){
        if(nowthingy[y+2][x]!=0||nowthingy[y+1][x-1]!=0 || nowthingy[y+1][x+1]!=0){
            board=nowthingy;
            nowthingy=[];
            newpeice();
        }
    }
    if(y===board.length-2){
        board=nowthingy;
        nowthingy=[];
        newpeice();
    }
    }
}

// square{
//     board[y][x]=1;
//     board[y-1][x-1]=1;
//     board[y-1][x]=1;
//     board[y][x-1]=1;
// }



drawboard();

function something(cheeseitz){
    switch(peice){
        case 1:
        rightl(cheeseitz,pos.y,pos.x);
        break;
        case 2:
        leftl(cheeseitz,pos.y,pos.x);
        break;
        case 3:
        redzig(cheeseitz,pos.y,pos.x);
        break;
        case 4:
        greenzig(cheeseitz,pos.y,pos.x);
        break;
        case 5:
        tpeice(cheeseitz,pos.y,pos.x);
        break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
    }
}
function drawcanvas(){

ctx.clearRect(0,0,500,1000);

let cheeseitz=[];

cheeseitz=JSON.parse(JSON.stringify(board))
console.log(cheeseitz)
something(cheeseitz);
    for(let row=0; row<20;row++){
        for(let column=0;column<20;column++){
            ctx.beginPath();
            x=column*50;
            y=row*50;
            if(cheeseitz[row][column]===1){
                ctx.fillStyle='orange';
            }
            else if(cheeseitz[row][column]===2){
                ctx.fillStyle='blue';
            }
            else if(cheeseitz[row][column]===3){
                ctx.fillStyle='red';
            }
            else if(cheeseitz[row][column]===4){
                ctx.fillStyle='green';
            }
            else if(cheeseitz[row][column]===5){
                ctx.fillStyle='purple';
            }
            else{
                ctx.fillStyle='black';
            }
            ctx.rect(x,y,50,50);
            ctx.fill()
            ctx.stroke();
        }
    }

}
setInterval(drawcanvas,1000/10)
