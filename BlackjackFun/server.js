const express = require('express');
const app = express();
const port = 6969;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const path = require('path');
const { send } = require('process');
app.use('/', express.static(path.join(__dirname, 'static')));

var win = 0;
var stand=false;
var horse = [];
var player = [];
var deck = [];
createdeck();
start();
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
    if(sum(player)<=21){
        house();
    }
    if(sum(horse)>21 && sum(player)<=21){
        win=2;
    }
    if(sum(horse)<sum(player) && sum(player)<=21){
        win=2;
    }
    else if(sum(horse)>sum(player) && sum(horse) <= 21){
        win=1;
    }
    else if(sum(player)==sum(horse)){
        win=4;
    }
}
app.get('/', (req, res)=>{
deck;
player;
stand;
horse;
});

app.post('/', (req, res)=>{
    let sillystring={};
    sillystring.player=player;
    sillystring.horse=horse;
    res.json(sillystring);
    console.log(sillystring);
});

app.post('/hit', (req,res) =>{
    if(sum(player)<=21 && stand==false){
    hit(player);
    console.log("Hit!");
    let sillystring={};
    sillystring.player=player;
    sillystring.horse=horse;
    res.json(sillystring);
    }
    else{
        res.send("hit reset you idiot");
    }
});
app.post('/reset', (req,res) =>{
    if(stand=true){
    console.log("Reset");
    res.json("Reset");
    deck=[];
    stand=false;
    player=[];
    horse=[];
    createdeck();
    start();
    }
    else{
        res.json("You need to stand first");
    }
    });
app.post('/stand', (req,res) =>{
winconditions();
res.json(win);
        stand=true;
        });
app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});