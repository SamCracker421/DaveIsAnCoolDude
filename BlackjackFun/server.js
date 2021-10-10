const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const express = require('express');
const app = express();
const port = 6969;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const path = require('path');
const { send } = require('process');
app.use('/', express.static(path.join(__dirname, 'static')));


//functions for game


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


//predominantly server side code.


app.get('/', (req, res)=>{
deck;
player;
stand;
horse;
});

function sendgamedata(){
    let sillystring={};
    sillystring.player=player;
    sillystring.horse=horse;
    sillystring.win=win;
    sillystring.stand=stand;
    res.send(sillystring);
}
app.post('/', (req, res)=>{
    let sillystring={};
    sillystring.player=player;
    sillystring.horse=horse;
    sillystring.win=win;
    sillystring.stand=stand;
    res.send(sillystring);
});
app.post('/hit', (req,res) =>{
    if(sum(player)<21){
    hit(player);
    }
    console.log("Hit!");
    res.redirect('http://localhost:6969');
});

app.post('/reset', (req,res) =>{
    if(stand===false){
    function resetion(){
        res.redirect('http://localhost:6969');
    };
    setInterval(resetion(),1000);
    }
    else{
    console.log("Reset");
    deck=[];
    stand=false;
    player=[];
    horse=[];
    win=0;
    createdeck();
    start();
    res.redirect('http://localhost:6969');
    }
    });

app.post('/stand', (req,res) =>{
winconditions();
res.redirect('http://localhost:6969');
        stand=true;
        });

app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});