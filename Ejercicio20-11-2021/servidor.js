const express = require("express");
const app = express();
const puerto = 3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index",{nombre:"David",
    edad:"26",
    telefono:"3005364758",
    correo:"leo.pos@"})
    });

        app.listen(puerto, () => {
            console.log("Ejecutando Express")
        })

