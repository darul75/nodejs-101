
var http = require('http');

http.createServer(onRequest).listen(8888);

console.log('Partio!');

function onRequest(req, res) {
  res.write('hola');
  res.end();
}
