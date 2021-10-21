let havents;
let persons;
function boop() {
    fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify({
        cmd: "boop"
        })
    })
    .then(res => res.json())
    .then(data => {
        events;
        people;
        havents=events;
        persons=people;
    })
    .catch(error => {

    })
}
boop();