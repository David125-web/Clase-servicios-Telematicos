let descripcion = ['Armario','Computador','Escritorio','Cama'];
let imagenes = ['https://www.alkosto.com/medias/7706112961071-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNDg5MDl8aW1hZ2UvanBlZ3xpbWFnZXMvaGZjL2g2NS8xMDkxMzYyOTk2MjI3MC5qcGd8MGIyM2FkZTQ3ZTQzY2MyNjQyMzRmOTQ5ZmFkMjdhNzk2NmZjOTIyZmQ3Y2Q1OTc3ODMzOTMzZWQ3OWM0OTk5OQ',
'https://icdn.dtcn.com/image/digitaltrends_es/imac-24-inch-1-2-500x500.jpg',
'https://m.media-amazon.com/images/I/71D+V1YbciL._AC_SY355_.jpg',
'https://ekonomodo.com/4916-large_default/colchon-con-base-cama-king-espaldar-italia-negro.jpg'
]
const express = require("express");
const app = express();
const app2 = express();
const puerto = 5000;
const path = require("path");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.set('views', __dirname + '/Views');
app.use(express.static(__dirname + '/Public'));


app.get('/', (req, res) => {
    res.render("index",{
        des:descripcion,
        img:imagenes
})
    });

app.post('/', function(req, res) {

        descripcion.push(req.body.des);
        imagenes.push(req.body.imag2);
    res.render("index",{
        des:descripcion,
        img:imagenes
    });
});

        app.listen(puerto, () => {
            console.log("Ejecutando Express")
        })

