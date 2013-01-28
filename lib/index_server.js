
var http  = require('http')
var fs    = require('fs');
var path  = require('path');

// Usaremos funciones anónimas...
http.createServer(function (request, response) {

  response.writeHead(200); //Entregar 200 OK como respuesta.
  var filePath = path.resolve(__dirname + '/../index.html')

  fs.readFile(filePath, 'utf-8', function (err, contenido){
    response.write(contenido);
    response.end();
  });

}).listen(8888);

// Esto se ejecuta cuando se echa a correr el programa.
console.log("El Webserver esta corriendo!.");
