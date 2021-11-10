
async function getStudent(id) {
    return await fetch(id==undefined ? `/students` : `/students/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(res => res.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log("error")
    })
}
async function getEvents(){
return await fetch(`/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',}
        })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        });
    }

    function getEvent(id) {
        fetch(id==undefined ? `/events` : `/events/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                events=data;
            })
            .catch(error => {
                console.log(error)
            })
            
    }
function addstudent(firstname, lastname){
    fetch(`/students`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                "firstname":firstname,
                "lastname":lastname
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(error => {
            console.log("error")
        })
}
function addevent(name,date,time,duration){
    fetch(`/students`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                "name":name,
                "date":date,
                "time":time,
                "duration":duration
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("error")
        })
}
function deleteStudent(id){
fetch(id===undefined ? `/students` : `/students/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify({
            cmd: "boop"
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("error")
    })
}
function createsignup(userId,eventId,signout){
    fetch('/signups', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                "userId":userId,
                "eventId":eventId,
                "signout":signout
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("error")
        })
    }
async function getstudentevents(id) {
   return await fetch(`/students/${id}/events`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error)
        })
        
}
    function something(){
        console.log("calling");
        getEvents().then(events =>{
            console.log(events)
        for(let pp=0; pp<events.length;pp++){
            let cormdog=document.createElement('input');
            cormdog.type='radio';
            cormdog.id=events[pp].name;
            cormdog.class="events";
            cormdog.name="events";
            cormdog.value=events[pp].id;
            let cheese=document.createElement('label');
            cheese.for=cormdog.id;
            cheese.innerText="Name: " + events[pp].name + " || Date: "+ events[pp].date + " || Time: " + events[pp].time;


            let fat=document.createElement("br");

            document.getElementById('radioshack').appendChild(cheese);
            document.getElementById('radioshack').appendChild(cormdog);
            document.getElementById('radioshack').appendChild(fat);
            }
        })

        }
    function cheetoes(potato){
        let lastid;
        getStudent().then(students=>{
        console.log(potato);
        let chew=students[students.length-1];
        console.log("chew: "+chew);
        let dt=new Date();
        let hours=dt.getHours();
        let seconds=dt.getSeconds();
        createsignup(chew.id,potato,hours + ":"+ seconds);
        lastid=chew;
        });
        document.body.innerHTML="";
        let wall=document.createElement("div");
        let btn1=document.createElement("button");
        let text=document.createElement("h");
        wall.id="wall";
        btn1.innerHTML="Click Here to go back";
        btn1.onclick=()=>{
            window.open("http://192.168.3.29:6969/");
        }
        document.body.appendChild(wall);
        document.getElementById("wall").appendChild(text);
        document.getElementById("wall").appendChild(btn1);

    }
