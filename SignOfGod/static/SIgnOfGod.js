let students;
let events=[];
function getStudent(id) {
    fetch(id==undefined ? `/students` : `/students/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        students=data;
    })
    .catch(error => {
        console.log("error")
    })
}
function getEvents(){
    fetch(`/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',}
        })
        .then(res => res.json())
        .then(data => {
            events=data;
        })
        .catch(error => {
            console.log(error);
        })
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
    