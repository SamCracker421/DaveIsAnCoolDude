var horse=[];
var player=[];
var deck=[];
var win=0;
var stand=false;
var natural=true;
function start(){
    createdeck();
    deal(horse);
    deal(player);
    deal(horse);
    deal(player);
}
function createdeck(){
    for(var i=1;i<14;i++){
    for(var x=1;x<5;x++){
    var suit=[x,i];
    deck.push(suit);
    }
    }
}
function deal(x1){
    var x=Math.floor(Math.random()*deck.length);
    x1.push(deck[x]);
    deck.splice(x,1);
}
function sum(x1){
    var x=0;
for(var z=0;z<x1.length;z++){
    if(x1[z][1]>=11){
    x=x+10;
    }
    else if(x1[z][1]!=1)
    {
    x=x+x1[z][1];
    }
}
for(var o=0;o<x1.length;o++){
    if(x1[o][1]==1){
        if(x+11>21){
            x=x+1;
        }
        else if(x+11<=21){
            x=x+11;
        }
    }
    else{
        x=x;
    }
}
return x;
}
function hit(x1){
    var x=Math.floor(Math.random()*deck.length);
    x1.push(deck[x]);
    deck.splice(x,1);
    output(player);
    natural=false;
    if(sum(player)>21){
        win=1;
    }
}

function output(x1){
    var output="";
    for(var o=0;o<x1.length;o++){
        output=output+x1[o]+"</br>";
    }
    output=output+sum(player)+"</br>";
    document.getElementById("totally").innerHTML=output;
}
function house(){
    while(sum(horse)<17){
        hit(horse);
    }
    if(sum(horse)==21){
        win=1;
    }
    return horse;
}
function winconditions(){
    house();
        if(sum(player)<sum(horse)){
            win=1;
        }
        if(sum(player)==21){
            if(natural==false){
                win=2;
            }
            else{
                win=3;
            }
        }
        else if(sum(horse)>21){
            win=2;
        }
    }