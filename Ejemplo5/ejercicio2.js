const express = require("express");
const app = express();
const puerto = 5000;
app.get('/',(req,res)=>{
    res.send("hola curso")
});
app.get('/curso',(req,res)=>{
res.send("Hola curso usando express v2")
});
