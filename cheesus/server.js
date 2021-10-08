const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const path = require('path');
app.use('/', express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
  res.write('hello');
  res.end();
});

app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});

