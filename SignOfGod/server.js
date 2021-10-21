const express = require('express');
const { nanoid } = require('nanoid');
const session = require('express-session');
const app = express();
const port = 6969;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({ secret: 'keyboard cat', cookie: {maxAge:24*60*60*1000}}))

const path = require('path');
const { send } = require('process');
app.use('/', express.static(path.join(__dirname, 'static')));

let people=[];
let person={};
let events=[];
let event={};

event.name="Off-Campus";
event.maxpeople=10;
events.push(event);
event={};
events.name="Loring";
events.maxpeople=100;
events.push(event);
app.post('/submition', (req,res)=>{
    person.id=nanoid();
    person.username=req.body.username;
    person.password=req.body.pwd;
    person.location=req.body.location;

    if(req.body.username===''||req.body.pwd===''||req.body.location===''){
        res.json("Please Input ALL Information");
    }

    else{
        people.push(person);
        person={};
        console.log(people);
        res.redirect('http://192.168.3.29:6969');
    }
});
app.post('/Removal',(req,res)=>{

    console.log(people.length);

    for(x in people){
        if(people[x].username===req.body.username && people[x].password===req.body.pwd){
        people.pop[x];
        }
}

console.log(people);
res.redirect('http://192.168.3.29:6969');
})

app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});