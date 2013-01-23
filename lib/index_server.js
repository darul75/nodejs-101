
var http = require('http')
var fs = require('fs');


http.createServer(function(request, response){

  response.writeHead(200); //Entregar 200 OK como respuesta.
  fs.readFile('../index.html', function(err, contenido){
    response.write(contenido);
    response.end();
  });

}).listen(8888);

// Esto se ejecuta cuando se echa a correr el programa.
console.log("El Webserver esta corriendo!.")
