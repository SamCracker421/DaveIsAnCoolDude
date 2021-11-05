const express = require('express');
const session = require('express-session');
const app = express();
const port = 6969;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 10*1000 }}))

const path = require('path');
const { send } = require('process');
const { brotliDecompressSync } = require('zlib');
app.use('/', express.static(path.join(__dirname, 'static')));
let players=[];
let array=createboard();
let turn=0;

function createboard(){
    let row=[];
    for(let x=0; x<6;x++){
        let column=[];
        for(let y=0; y<7;y++){
            column.push(0);
        }
        row.push(column);
    }
    return row;
}

function startup(){
    let array=createboard();
    let playerturn=1;
    let player={
        "id":nanoid(),
        "turn":false
    }
    players.push(player);
}
let gamestate={
    "array":array,
    "players":players,
    "turn":turn
}

app.post('')
app.get('/game', (req,res) =>{

res.json(array);
})
app.post('/game',(req,res)=>{
res.json(array);
})

app.post('/move',(req,res)=>{
let key=req.body.key-1;
if(key!=-1){
    for(let x=0; x<array.length-1;x++){
        if((array[x][key]===0) && (((array[x+1][key])!=0) || x===array.length-2)){
            array[x][key]=2;
        }
        console.log(key);
    }
}   
    
})
app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});