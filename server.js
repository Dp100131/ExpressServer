const express = require('express');
const bodyParser = require('body-parser');
//const router = require('./components/messages/network')
const router = require('./Network/routes')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app); 

/* 
app.use(router); */

app.listen(3000)

console.log('La app está escuchando en https://localhost:3000');