var win = 0;
var stand=false;
var horse = [];
var player = [];
var deck = [];
createdeck();
function createdeck() {
    for (var i = 1; i < 14; i++) {
        for (var x = 1; x < 5; x++) {
            var suit = [x, i];
            deck.push(suit);
        }
    }
}
function checkdecklength(){
    if(deck.length<10){
        deck=[];
        createdeck();
    }
}

function start() {
    deal(horse);
    deal(player);
    deal(horse);
    deal(player);
    shoot();
    shot();
}

function deal(x1) {
    var x = Math.floor(Math.random() * deck.length);
    x1.push(deck[x]);
    deck.splice(x, 1);
}
function sum(x1) {
    var x = 0;
    for (var z = 0; z < x1.length; z++) {
        if (x1[z][1] >= 11) {
            x = x + 10;
        }
        else if (x1[z][1] != 1) {
            x = x + x1[z][1];
        }
    }
    for (var o = 0; o < x1.length; o++) {
        if (x1[o][1] == 1) {
            if (x + 11 > 21) {
                x = x + 1;
            }
            else if (x + 11 <= 21) {
                x = x + 11;
            }
        }
        else {
            x = x;
        }
    }
    return x;
}
function hit(x1) {
    var x = Math.floor(Math.random() * deck.length);
    x1.push(deck[x]);
    deck.splice(x, 1);
    natural = false;
    if (sum(player) > 21) {
        win = 1;
    }
    shoot();
    if(sum(player)>21){
        win=1;
        winconditions();
    }
}

function output(x1) {
    var output = "";
    for (var o = 0; o < x1.length; o++) {
        output = output + x1[o] + "</br>";
    }
    output = output + sum(player) + "</br>";
    document.getElementById("totally").innerHTML = output;
}
function house() {
    while (sum(horse) < 17) {
        hit(horse);
    }
    if (sum(horse) == 21) {
        win = 1;
    }
    return horse;
}
function winconditions() {
    shot();
    if(sum(player)<=21){
        house();
    }
    
    if(sum(horse)>21 || sum(player)<=21){
        win=2;
    }
    else if(sum(player)==sum(horse)){
        win=2;
    }

    if(win===1){
        document.getElementById("potato").innerText="House Wins";
    }
    else if(win==2){
        document.getElementById("potato").innerText="Player Wins";
    }
    else if(win==4){
        document.getElementById("potato").innerText="Tie Wins";
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
function killkids(){
    let element=document.getElementById("heck")
while(element.firstChild){
    element.removeChild(element.firstChild);
}
}
function destroythehchild(){
    let element=document.getElementById("hurkey")
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
function shot(){
destroythehchild();
if(stand===false){
let sus=document.createElement("img");
sus.src="pug\\back.png";
sus.className="horseplay";
document.getElementById("hurkey").appendChild(sus);
for(let x=1; x<horse.length;x++){
    let sus=document.createElement("img");
    sus.src=tocard(horse,x);
    sus.className="horseplay";
    document.getElementById("hurkey").appendChild(sus);
}
}
else{
    destroythehchild();
    for(let x=0; x<horse.length;x++){
        let sus=document.createElement("img");
        sus.src=tocard(horse,x);
        sus.className="horseplay";
        document.getElementById("hurkey").appendChild(sus);
    }

}
}
function shoot(){
killkids();
for (var x = 0; x < player.length; x++) {
        var turkey=document.createElement("img");
        turkey.src=tocard(player,x);
        turkey.className="horseplay";
        document.getElementById("heck").appendChild(turkey);
}
}
