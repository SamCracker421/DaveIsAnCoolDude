let Twit=require('twit');

const express = require('express');
const app = express();
const port = 6969;
var x=1;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const path = require('path');
const { send } = require('process');
app.use('/', express.static(path.join(__dirname, 'static')));

app.get('/',(req,res)=>{

});
app.post('/hit', (req,res)=>{
    x=x+1;
    tweeter();
res.json("Done!");

});

var T = new Twit({
    consumer_key:         'Nw45RXNcy4es1IecdHiyhL4a9',
    consumer_secret:      'nsCHqTc2LIp6TMKQiV24EiXXDaex8anEgUsrlclUSZawp22uht',
    access_token:         '1413236054317010946-GUJTMvowYwHnPg9u4bD9wc1MgpFmMX',
    access_token_secret:  '5BjZASxCWq4COYKFqoejNO1cjcGAEr6IJbZjde1IDiXYf'
  });

  function tweeter(sus) {
  }
  app.listen(port, () => {
    console.log(`BlackJack Server at http://localhost:${port}`)
});
