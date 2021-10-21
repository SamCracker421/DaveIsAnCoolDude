let variable=[];
let horse=[];
let snad;
let won;
let bot;
let cheese=document.createElement("div");
document.body.appendChild(cheese);
let viola=document.getElementById("cheddar");
function boop() {
    fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify({
        // your expected POST request payload goes here
        cmd: "boop"
        })
    })
    .then(res => res.json())
    .then(data => {
        variable=data.player;
        horse=data.horse;
        snad=data.stand;
        won=data.win;
        shot(horse);
        shoot(variable);
        woo();

    })
    .catch(error => {
        console.log(error)
    })
}
boop();

function woo(){
    let textbox=document.getElementById("potato");
    if(won!=0){
        if(won==2){
            textbox.innerText="PLAYER WINS"
        }
        if(won==1){
            textbox.innerText="HOUSE WINS"
        }
        if(won==4){
            textbox.innerText="TIE";
        }
    }
    else{
        textbox.innerText="  ";
    }
}
function tosuit(x1){
    let suit='q';
    switch(x1[0]){
        case 1:
            suit='c';
            break;
        case 2:
            suit='s';
            break;
        case 3:
            suit='d';
            break;
        case 4:
            suit='h';
            break;
        default:
            suit='o';
    }
    return suit;
}
function tonumber(x1){
    let number='g';
    switch(x1[1]){
    case 1:
        number='a';
        break;
    case 11:
        number='j';
        break;
    case 12:
        number='q';
        break;
    case 13:
        number='k';
        break;
    default:
        number=x1[1];
    }
return number;
}
function tocard(x1,x){
    let img;
    img="pug"+"\\"+tonumber(x1[x])+tosuit(x1[x])+".png";
    return img;
}
function shot(x1){
if(snad==false){
let sus=document.createElement("img");
sus.src="pug\\back.png";
sus.className="horseplay";
document.getElementById("cheddar").appendChild(sus);
for(let x=1; x<horse.length;x++){
    let sus=document.createElement("img");
    sus.src=tocard(x1,x);
    sus.className="horseplay";
    document.getElementById("cheddar").appendChild(sus);
}
}
else{
    for(let x=0; x<horse.length;x++){
        let sus=document.createElement("img");
        sus.src=tocard(horse,x);
        sus.className="horseplay";
        document.getElementById("cheddar").appendChild(sus);
    }

}
}

function shoot(x1){
for (var x = 0; x < x1.length; x++) {
        var turkey=document.createElement("img");
        turkey.src=tocard(x1,x);
        turkey.className="horseplay";
        cheese.appendChild(turkey);
}
}
