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

let students=[];
let events=[];
let signups=[];

app.get('/students', (req,res)=>{
    res.json(students);
});

app.post('/students', (req, res) =>{
    let student={
        id:nanoid(),
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }
    students.push(student);
    res.status(201).json(student)
});
app.get('/events',(req,res)=>{
res.json(events);
})
app.post('/events', (req,res)=>{
    let event={
        id:nanoid(),
        name:req.body.name,
        date:req.body.date,
        time:req.body.time,
        duration:req.body.duration
    }
    events.push(event);
    res.status(201).json(event)
})
app.post('/signups',(req,res)=>{    
    if(students.find(e=>e.id === req.body.userId)=== undefined){
        console.log("Students");
    }
    if(events.find(e=>e.id === req.params.eventId) === undefined){
        console.log("Events");
    }
    console.log(students)
    console.log(events)
if(students.find(e=>e.id === req.body.userId) === undefined || events.find(e=>e.id === req.body.eventId) === undefined){
    res.status(404).json({
        status:"You are very worthless, go to Mexico and die."
    })
    return;
}
    let signup={
        id:nanoid(),
        userId:req.body.userId,
        eventId:req.body.eventId,
        signout:req.body.signout,
        signin:req.body.signup
    }
    signups.push(signup)
    res.status(201).json(signup);
});
app.get('/signups',(req,res)=>{
    res.json(signups)
})
app.get('/students/:id', (req,res)=>{
res.send(students.find(e=>e.id === req.params.id));
})
app.post('/students/:id',(req,res)=>{
let student = students.find(e=>e.id === req.params.id);
if(!student){
    res.status(404).json({
        status:"Stop Searching for things that dont exist"
    })
}
else{
    res.json(student);
    res.status(201).json(student)
}
})
app.patch('/students/:id',(req,res)=>{
    let student = students.find(e=>e.id === req.params.id);
if(!student){
    res.status(404).json({
        status:"Stop Searching for things that dont exist"
    })
}
else{
    let inchex=students.indexOf(student);
    let firstname = req.body.firstname ? req.body.firstname : student.firstname;
    let lastname = req.body.lastname ? req.body.lastname : student.lastname;
    students[inchex]={
        "firstname":firstname,
        "lastname":lastname,
    }
    res.status(201).json(students[inchex]);
}
})

app.get('/events/:id', (req,res)=>{
    res.send(events.find(e=>e.id === req.params.id));
    })

app.post('/events/:id',(req,res)=>{
    let event = events.find(e=>e.id === req.params.id);
    if(!event){
        res.status(404).json({
            status:"Stop Searching for things that dont exist"
        })
    }
    else{
        res.status(201).json(event)
    }
    })
    app.patch('/events/:id',(req,res)=>{
        let event = events.find(e=>e.id === req.params.id);
    if(!event){
        res.status(404).json({
            status:"Stop Searching for things that dont exist"
        })
    }
    else{
        let inchex=events.indexOf(event);
        let name = req.body.name ? req.body.name : event.name;
        let date = req.body.date? req.body.date : event.date;
        let time = req.body.time? req.body.time : event.time;
        let duration= req.body.duration? req.body.duration:event.duration;
        events[inchex]={
            name:req.body.name,
            date:req.body.date,
            time:req.body.time,
            duration:req.body.duration
        }
        res.status(201).json(events[inchex]);
    }
    })
    app.get('/signups/:id', (req,res)=>{
        res.send(signups.find(e=>e.id === req.params.id));
        })
    app.post('/signups/:id',(req,res)=>{
        let signup = signups.find(e=>e.id === req.params.id);
        if(!signup){
            res.status(404).json({
                status:"Stop Searching for things that dont exist"
            })
        }
        else{
            res.status(201).json(signup)
        }
        })
        app.patch('/signups/:id',(req,res)=>{
            let signup = signups.find(e=>e.id === req.params.id);
        if(!signup){
            res.status(404).json({
                status:"Stop Searching for things that dont exist"
            })
        }        

        else{
            let inchex=signups.indexOf(signup);
            let userId = req.body.userId ? req.body.userId : signup.userId;
            let eventId = req.body.eventId? req.body.eventId : signup.eventId;
            let signout = req.body.signout? req.body.signout : signup.signout;
            let signin= req.body.signin? req.body.signin:signup.signin;
            signup[inchex]={
                userId:req.body.userId,
                eventId:req.body.eventId,
                signout:req.body.signout,
                signin:req.body.signup
            }
            res.status(201).json(signup[inchex]);
        }
        })
        app.get('/students/:id/events', (req,res) => {
            let cheeto=[];
            for(let signup of signups){
                if(signup.userId == req.params.id){
                    cheeto.push(events.find(e=>e.id === signup.eventId));
                }
            }
            res.status(200).json(JSON.stringify(cheeto));
        })

        app.get('/events/:id/students', (req,res) => {
            let cheetoes=[];
            for(let signup of signups){
                if(signup.eventId == req.params.id){
                    cheetoes.push(students.find(e=>e.id === signup.userId));
                }
            }
            res.status(200).json(JSON.stringify(cheetoes));
        })

        app.delete('/students/:id', (req,res) => {
            let student= students.find(e=>e.id === req.params.id)
            if(!student){
                res.status(404).json({status:"You should die"});
            }
            students.splice(students.indexOf(student),1);
            res.status(200).json("Deletes");
        })


app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});