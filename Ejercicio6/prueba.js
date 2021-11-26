const express = require("express");
const app = express();
const puerto = 6000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.get('/', (req, res) => {
    res.render("pagina1",{nombre:"David",
    edad:"26",
    telefono:"3005364758",
    correo:"leo.pos@"})
    });

    app.get('/pagina2', (req, res) => {
        res.render("pagina2",{nombre:"linda",
        edad:"29",
        telefono:"314588855",
        correo:"linda@",
    })
        });

        app.listen(puerto, () => {
            console.log("Ejecutando Express")
        })