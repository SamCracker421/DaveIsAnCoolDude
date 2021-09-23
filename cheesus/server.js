const express = require('express')
const app = express()
const port = 6969

app.get('/', (req, res) => { 
  res.send("hello:"+ req.ip);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })