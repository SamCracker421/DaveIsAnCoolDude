
function boop() {
    fetch('/hit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify({
        // your expected POST request payload goes here
        cmd: "boop"
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })  
}


boop();