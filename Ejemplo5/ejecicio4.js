const express = require("express");
const app = express();
const puerto = 5000;

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'/plantilla.html'));
});
app.post('/',(req,res)=>{
var mensaje = req.body.mensaje;
console.log('nuevooo')
res.send('El mensaje era'+mensaje * 2);

});
app.listen(puerto,()=>{console.log('ejecutando');});

