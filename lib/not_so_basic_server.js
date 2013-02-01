var http = require('http');

http.createServer(onRequest).listen(8888);

console.log('Partió!');

function onRequest(req, res) {
  basicRouteHandler(req.url);

  function basicRouteHandler(route) {
    switch (route) {
      case '/':
        responder('Home');
        break;
      case '/hola':
        responder('Hola');
        break;
      default:
        responder('chao');
        break;
    }
  }

  function responder(text) {
    res.write(text);
    res.end();
  }
}
