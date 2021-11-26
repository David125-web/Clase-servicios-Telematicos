const express = require("express");
const app = express();
const puerto = 5000;
const path = require('path');
const bodyParser = require('body-parser');
app.set('view engine','ejs');
app.set('views',__dirname+'views');


var personal = {
    nombre: 'david',
    edad: '18',
    genero: 'M',
    telefono: '3026903'
};

app.get('/', function (req, res) {
    res.render('plan', { title: 'Hey', message: 'Hello there!'});
  });
  
