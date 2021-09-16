
var horse = [];
var player = [];
var deck = [];
var win = 0;
var stand=false;
function start() {
    createdeck();
    deal(horse);
    deal(player);
    deal(horse);
    deal(player);
}
function createdeck() {
    for (var i = 1; i < 14; i++) {
        for (var x = 1; x < 5; x++) {
            var suit = [x, i];
            deck.push(suit);
        }
    }
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
    output(player);
    natural = false;
    if (sum(player) > 21) {
        win = 1;
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
    house();
    document.getElementById("hitter").onclick = "";
    if (sum(player) < sum(horse)) {
        win = 1;
    }
    if (sum(player) === 21) {
        if (natural === false) {
            win = 2;
        }
        else {
            win = 3;
        }
    }
    if (sum(player) > sum(horse) || sum(player) <= 21) {
        win = 2;
    }
    if (sum(player > 21)) {
        win = 1;
    }
    else if (sum(horse) > 21) {
        win = 2;
    }
    // if (stand = true) {
    //     if (win == 1) {
    //         bank = bank - bet;
    //     }
    //     else if (win == 2) {
    //         bank = bank + bet;
    //     }
    //     else if (win == 3) {
    //         bank = bank + (1.5) * bet;
    //     }
    // }
}
function tocard(x1,x){
    var img="";
            if(x1[x]===[1, 1]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\ac.png";
                }
            else if(x1[x]===[1, 2]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\2c.png";
                }
            else if(x1[x]===[1, 3]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\3c.png";
                }
            else if(x1[x]===[1, 4]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\4c.png";
                }
            else if(x1[x]===[1, 5]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\5c.png";
                }
            else if(x1[x]===[1, 6]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\6c.png";
                }
            else if(x1[x]===[1, 7]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\7c.png";
                }
            else if(x1[x]===[1, 8]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\8c.png";
                }
            else if(x1[x]===[1, 9]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\9c.png";
                }
            else if(x1[x]===[1, 10]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\10c.png";
                }
            else if(x1[x]===[1, 11]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\jc.png";
                }
            else if(x1[x]===[1, 12]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\qc.png";
                }
            else if(x1[x]===[1, 13]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\kc.png";
                }
            else if(x1[x]===[2, 1]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\ah.png";
                }
            else if(x1[x]===[2, 2]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\2h.png";
                }
            else if(x1[x]===[2, 3]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\3h.png";
                }
            else if(x1[x]===[2, 4]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\4h.png";
                }
            else if(x1[x]===[2, 5]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\5h.png";
                }
            else if(x1[x]===[2, 6]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\6h.png";
                }
            else if(x1[x]===[2, 7]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\7h.png";
                }
            else if(x1[x]===[2, 8]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\8h.png";
                }
            else if(x1[x]===[2, 9]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\9h.png";
                }
            else if(x1[x]===[2, 10]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\10h.png";
                }
            else if(x1[x]===[2, 11]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\jh.png";
                }
            else if(x1[x]===[2, 12]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\qh.png";
                }
            else if(x1[x]===[2, 13]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\kh.png";
                }
            else if(x1[x]===[3, 1]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\ad.png";
                }
            else if(x1[x]===[3, 2]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\2d.png";
                }
            else if(x1[x]===[3, 3]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\3d.png";
                }
            else if(x1[x]===[3, 4]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\4d.png";
                }
            else if(x1[x]===[3, 5]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\5d.png";
                }
            else if(x1[x]===[3, 6]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\6d.png";
                }
            else if(x1[x]===[3, 7]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\7d.png";
                }
            else if(x1[x]===[3, 8]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\8d.png";
                }
            else if(x1[x]===[3, 9]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\9d.png";
                }
            else if(x1[x]===[3, 10]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\10d.png";
                }
            else if(x1[x]===[3, 11]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\jd.png";
                }
            else if(x1[x]===[3, 12]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\qd.png";
                }
            else if(x1[x]===[3, 13]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\kd.png";
                }
            else if(x1[x]===[4, 1]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\as.png";
                }
            else if(x1[x]===[4, 2]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\2s.png";
                }
            else if(x1[x]===[4, 3]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\3s.png";
                }
            else if(x1[x]===[4, 4]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\4s.png";
                }
            else if(x1[x]===[4, 5]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\5s.png";
                }
            else if(x1[x]===[4, 6]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\6s.png";
                }
            else if(x1[x]===[4, 7]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\7s.png";
                }
            else if(x1[x]===[4, 8]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\8s.png";
                }
            else if(x1[x]===[4, 9]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\9s.png";
                }
            else if(x1[x]===[4, 10]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\10s.png";
                }
            else if(x1[x]===[4, 11]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\js.png";
                }
            else if(x1[x]===[4, 12]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\qs.png";
                }
            else if(x1[x]===[4, 13]){
                img="C:\Users\Pleas\Desktop\DaveIsAnCoolDude\Blackjack\pug\ks.png";
            }
        return img;
}
for (var x = 0; x < player.length; x++) {
        var turkey=document.createElement("IMG");
        turkey.src=tocard(player,x);
        document.getElementById("heck").appendChild(turkey);
}