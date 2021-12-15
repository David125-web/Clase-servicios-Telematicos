let nombre = [];
let apellido = [];
let correo = [];
let edad = [];

const express = require("express");
const app = express();
const app2 = express();
const puerto = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.set('views', __dirname + '/Views');
app.use(express.static(__dirname + '/Public'));


app.get('/', (req, res) => {
    res.render("index",{
        nom:nombre,
        apell:apellido,
        corr:correo,
        ed:edad,
})
    });

app.post('/', function(req, res) {

        nombre.push(req.body.nom);
        apellido.push(req.body.apell);
        correo.push(req.body.corr);
        edad.push(req.body.ed);
    res.render("index",{
        nom:nombre,
        apell:apellido,
        corr:correo,
        ed:edad,
    });
});

        app.listen(puerto, () => {
            console.log("Ejecutando Express")
        })