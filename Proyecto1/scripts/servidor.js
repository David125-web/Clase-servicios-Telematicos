//const { default: Swal } = require("sweetalert2");
var nuevaPersona = [];
var baseDatos = [];
var error = 0;

function capturar()
{
    debugger;
    console.log('ingreso');
        function persona(nombre,usuario,contraseña)
        {
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.nombre = nombre;
        }
    
    var usuariocap = document.getElementById("user").value;
    var contraseñacap = document.getElementById("contraseña").value;
    var nombree = document.getElementById("nombre").value;

    nuevaPersona = new persona(usuariocap,contraseñacap,nombree);
    agregar();
    ver();
}
    baseDatos = [];
    function agregar ()
    {
        debugger;
     baseDatos.push(nuevaPersona);
     console.log('Agregar en base de datos');
     console.log(baseDatos);
    }

function ver()
{
    document.getElementById("tablaregistro").innerHTML = creartabla(baseDatos);
   
}
let creartabla= function(usuarios){

    debugger;
    let scritptabla = "<tr><th>Nombre usuario</th><th>Usuario</th><th>contraseña</th></tr>";
    for(let usera of usuarios)
    {
        let fila = "<tr><td>";
        fila += usera.contraseña;
        fila += "</td>";

        fila += "<td>";
        fila += usera.nombre;
        fila += "</td>";

        fila += "<td>";
        fila += usera.usuario;
        fila += "</td>";
        scritptabla += fila;
    }
    return scritptabla;
}

function login() {
debugger;
var con = 0;
var user = document.getElementById("uname").value;
var contrase = document.getElementById("psw").value;
var user1 = document.getElementById("uname");
var contrase1 = document.getElementById("psw");
var prueba = document.getElementById("prueba");

baseDatos.find(object =>{
    if(object.nombre.includes(user)){
    con ++;
    }
});
if(con>0)
{
    const filtered = baseDatos.filter(function(element){
        return element.nombre == user});

        if(filtered.filter(function(element){ return element.usuario == contrase }) != ''){
        console.log('Ingresando');
        user1.disabled = false;
        contrase1.disabled = false;
        prueba.disabled = false;
        swal("Bienvenido!", "Los datos han sido ingresandos correctamente!", "success");

        error = 0;
        }
        else{
            error ++;
            swal("Contraseña Invalida!", "Los datos son incorrectos!", "error");
            if(error > 2)
            {
                user1.disabled = true;
                contrase1.disabled = true;
                prueba.disabled = true;
                let timeout = setTimeout(alertFunc, 30000);
                  
                  function alertFunc() {
                    user1.disabled = false;
                    contrase1.disabled = false;
                    prueba.disabled = false;
                  }


            console.log('Contraseña Invalida');
            }
        }
}
else{
    error ++;
    swal("Usuario Invalido!", "Los datos son incorrectos!", "error");

    if(error > 2)
    {
    console.log('Usuario Invalido');
    user1.disabled = true;
    contrase1.disabled = true;
    prueba.disabled = true;

    let timeout = setTimeout(alertFunc, 30000);
      
      function alertFunc() {
        user1.disabled = false;
        contrase1.disabled = false;
        prueba.disabled = false;
      }
    }
}

}
