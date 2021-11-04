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
let players=[];
let array=[
    [2, 0, 0, 1,0, 2, 0],
    [0, 0, 0, 0,0, 0, 0],
    [0, 0, 1, 0,2, 0, 0],
    [0, 0, 0, 0,0, 0, 0],
    [2, 0, 0, 0,2, 0, 0],
    [0, 0, 2, 0,0, 0, 0]
  ]
let turn=0;

// function createboard(){
//     let column=[];
//     for(let x=0; x<6;x++){
//         let row=[];
//         for(let y=0; y<7;y++){
//             row.push(0);
//         }
//         column.push(row);
//     }
//     return column;
// }

// function startup(){
//     let array=createboard();
//     let playerturn=1;
//     let player={
//         "id":nanoid(),
//         "turn":false
//     }
//     players.push(player);
// }
app.get('/game', (req,res) =>{
res.json(array);
})
app.post('/game',(req,res)=>{

res.json(array);

})
// console.log(createboard());
app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});