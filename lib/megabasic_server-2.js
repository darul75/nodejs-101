
var http = require('http')


http.createServer(function(request, response){

  // Todo esto se ejecuta CADA vez que llega un request.
  response.writeHead(200); //Entregar 200 OK como respuesta.
  response.write("Amo a Ballero.");

  setTimeout(function(){
    response.write("Ahora no tanto.");
    response.end();
  }, 5000); // 5 Segundos


}).listen(8888);

// Esto se ejecuta cuando se echa a correr el programa.
console.log("El Webserver esta corriendo!.")
