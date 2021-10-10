const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const express = require('express');
const session = require('express-session');
const app = express();
const port = 6969;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 10*1000 }}))

const path = require('path');
const { send } = require('process');
app.use('/', express.static(path.join(__dirname, 'static')));


//functions for game




function createdeck(deck) {
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


function start(horse,player,deck) {
    deal(horse,deck);
    deal(player,deck);
    deal(horse,deck);
    deal(player,deck);
}


function deal(x1,deck) {
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


function hit(x1,deck,player,win){
    var x = Math.floor(Math.random() * deck.length);
    x1.push(deck[x]);
    deck.splice(x, 1);
}

function house(horse,deck,player,win) {
    while (sum(horse) < 17) {
        hit(horse,deck,player,win);
    }
    if (sum(horse) == 21) {
        win = 1;
    }
    return horse;
}

function winconditions(player,horse,deck) {
    let win=0;
    if(sum(player)<=21){
        house(horse,deck,player,win);
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
    else if(sum(player)>21){
        win=1;
    }
    return win;
}


//predominantly server side code.
function initialization(){
    var win = 0;
    var stand=false;
    var horse = [];
    var player = [];
    var deck = [];
    createdeck(deck);
    start(horse,player,deck);
    return{
    stand:stand,
    horse:horse,
    player:player,
    deck:deck,
    win:win
    };
}

app.get('/', (req, res)=>{
    console.log("hello");
    res.send(req.session.game);
});

app.post('/', (req, res)=>{
    if(req.session.game===undefined){
        req.session.game=initialization();
        console.log("hello");
    }
    res.send(req.session.game);
});

app.post('/hit', (req,res) =>{
    let game=req.session.game;
    if(sum(game.player)<21){
    hit(game.player,game.deck,game.player,game.win);
    }
    console.log("Hit!");
    res.redirect('http://localhost:6969');
});

app.post('/reset', (req,res) =>{
    let game=req.session.game;
    if(game.stand===false){
        res.redirect('http://localhost:6969');
    }
    else{
    console.log("Reset");
    req.session.game=initialization();
    res.redirect('http://localhost:6969');
    }
    });

app.post('/stand', (req,res) =>{
req.session.game.win=winconditions(req.session.game.player,req.session.game.horse,req.session.game.deck);
req.session.game.stand=true;
res.redirect('http://localhost:6969');

});

app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});