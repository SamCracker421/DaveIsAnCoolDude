const express = require('express');
const { nanoid } = require('nanoid');
const session = require('express-session');
const app = express();
const port = 6969;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SignIn.db');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({ secret: 'keyboard cat', cookie: {maxAge:24*60*60*1000}}))

const path = require('path');
const { send } = require('process');
app.use('/', express.static(path.join(__dirname, 'static')));

app.get('/students', (req,res)=>{
            db.all("select * from students", function(err,row){ 
                if(err){
                    console.log(err);
                }
                if(row){
                    res.status(201).json(row);
                }
            })
});

app.post('/students', (req, res) =>{
    let student={
        id:nanoid(),
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }
    db.serialize(function(){
        let init=db.prepare("insert into students values (?,?,?)");
        init.run(student.id,student.firstname,student.lastname);
        init.finalize();
    })
    res.status(201).json(student)
});
app.get('/events',(req,res)=>{
            db.all("Select * from events", function(err,row){
                if(err){
                    console.log(err);
                }
                if(row){
                    res.status(201).json(row);
                }
            })
})

app.post('/events', (req,res)=>{
    let event={
        id:nanoid(),
        name:req.body.name,
        date:req.body.date,
        time:req.body.time,
        duration:req.body.duration
    }
    db.serialize(function(){
        let init=db.prepare("insert into events values (?,?,?,?,?)");
        init.run(event.id,event.name,event.date,event.time,event.duration);
        init.finalize();
    })
    res.status(201).json(events);
})

app.post('/signups',(req,res)=>{    
    let signup={
        id:nanoid(),
        userId:req.body.userId,
        eventId:req.body.eventId,
        signout:req.body.signout,
        signin:req.body.signup
    }
    db.serialize(function(){
        let init=db.prepare("insert into events values (?,?,?,?,?)");
        init.run(signup.id,signup.userId,signup.eventId,signup.signout,signup.signin);
        init.finalize();
    })
    res.status(201).json(signup);
});
app.get('/signups',(req,res)=>{
    db.serialize(
        function() {
            db.each("Select * from signups", function(err,row){
                console.log(row);
            })
        }
        )
})
app.get('/students/:id', (req,res)=>{
db.get("select * from students where id=?",req.params.id,(err,row)=>{
    if(err){
        console.log(err)
    }
    else if(row){
        console.log(row);
        res.json(row);
    }
    
})

})
app.post('/students/:id',(req,res)=>{
    db.get("select * from students where id=?",req.params.id,(err,row)=>{
        if(err){
            console.log(err)
            res.status(404)
        }
        else if(row){
            console.log(row);
            res.status(201).json(row)
        }
        
    })
    
})
app.patch('/students/:id',(req,res)=>{
    db.get("select * from students where id=?",req.params.id,(err,row)=>{
        if(err){
            console.log(err)
            res.status(404).json({status:"stop"});
        }
        else if(row){
            let firstname = req.body.firstname ? req.body.firstname : row.firstname;
            let lastname = req.body.lastname ? req.body.lastname : row.lastname;
        db.run("update students set firstname="+firstname+",lastname="+lastname+"where id="+req.params.id);
            res.status(201).json(row)
        } 
    })
})

app.get('/events/:id', (req,res)=>{
db.get("select * from events where id=?",req.params.id,(err,row)=>{
    if(err){
        console.log(err)
        res.status(404)
    }
    else if(row){
        res.status(201).json(row)
    }
    
})

})

app.post('/events/:id',(req,res)=>{
    db.get("select * from events where id=?",req.params.id,(err,row)=>{
        if(err){
            console.log(err)
            res.status(404)
        }
        else if(row){
            console.log(row);
            res.status(201).json(row)
        }
        
    })
})
    app.patch('/events/:id',(req,res)=>{
        db.get("select * from students where id=?",req.params.id,(err,row)=>{
        if(err){
            console.log(err)
            res.status(404).json({status:"stop"});
        }
        else if(row){
            let name = req.body.name ? req.body.name : row.name;
            let date = req.body.date? req.body.date : row.date;
            let time = req.body.time? req.body.time : row.time;
            let duration= req.body.duration? req.body.duration:row.duration;
        db.run("update events set name="+name+",date="+date+", time="+time+"duration="+duration+ "where id="+req.params.id);
            res.status(201).json(row)
        } 
    })
    })

    app.get('/signups/:id', (req,res)=>{
    db.get("select * from events where id=?",req.params.id,(err,row)=>{
        if(err){
            console.log(err)
            res.status(404)
        }
        else if(row){
            console.log(row);
            res.status(201).json(row)
        }
        
    })
        })
    app.post('/signups/:id',(req,res)=>{
        db.get("select * from students where id=?",req.params.id,(err,row)=>{
            if(err){
                console.log(err)
                res.status(404)
            }
            else if(row){
                console.log(row);
                res.status(201).json(row)
            }
            
        })
        })
        app.patch('/signups/:id',(req,res)=>{
            db.get("select * from signups where id=?",req.params.id,(err,row)=>{
                if(err){
                    console.log(err)
                    res.status(404).json({status:"stop"});
                }
                else if(row){
                    let userId = req.body.userId ? req.body.userId : row.userId;
                    let eventId = req.body.eventId? req.body.eventId : row.eventId;
                    let signout = req.body.signout? req.body.signout : row.signout;
                    let signin= req.body.signin? req.body.signin:row.signin;
                db.run("update signups set userId="+userId+",eventId="+eventId+", signout="+signout+"signin="+signin+ "where id="+req.params.id);
                    res.status(201).json(row)
                } 
            })
        })
        app.get('/students/:id/events', (req,res) => {
            db.all("select * from signups where userId=?",req.params.id,(err,row)=>{
                if(err){
                    console.log(err);
                }
                if(row){
                    for(let i=0; i < row.length;i++){
                    db.all("select * from events where id=?",row[i].eventId,(error,rew)=>{
                        if(err){
                            console.log(error);
                        }
                        if(rew){
                        res.status(201).json(rew);
                        }
                    })
                }
                }
            })
        })
        app.get('/events/:id/students', (req,res) => {
            db.all("select * from signups where eventId=?",req.params.id,(err,row)=>{
                if(err){
                    console.log(err);
                }
                if(row){
                    let string="";
                    for(let x=1;x<row.length;x++){
                        string+=" or id="+row[x].userId;
                    }
                    console.log(string);
                        db.all("select * from students where id=?"+string,row[0].userId,(error,rew)=>{
                            
                        if(error){
                            console.log(error);
                        }
                        if(rew){
                            res.status(201).json(rew);
                        }
                    })
                }
                })
            }
        )

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

