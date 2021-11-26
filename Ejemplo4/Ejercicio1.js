const http = require("http");
const nuevo = require("yosay");

const servidor = http.createServer;
const server = http.createServer((req,res)=>{
    res.end(nuevo('hola'));
});
const puerto = 3000;
server.listen(puerto,()=>{
console.log("El servidor esta corriendo en el puerto"+puerto);
});