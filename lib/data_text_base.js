
// Requerimientos de modulo
var crypto = require('crypto');
var readline = require('readline');
var fs = require('fs');

// Ahora el database lo sacaremos de un archivo (la primera llamada vendria a ser nuestro main)
fs.readFile('./data/data_text_base.json', 'utf8', onReadFile);

var database; // <-- declaramos esta variable global para almacenar
var rl;       // <-- Necesitamos esta variable en este scope para manipular lecturas de línea
var usuario;   // <- Necesitamos una variable para almacenar el usuario que recibamos.

function onReadFile(err, data) {
  if (err) throw err;

  database = JSON.parse(data);

  startProgram();
}

function startProgram() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Punto de Partida [main()]
  rl.question('Ingrese Nombre de Usuario: ', inputUsuarioRecibido);
}

function inputUsuarioRecibido(user) {
  usuario = user;
  rl.question('Ingrese Password: ', inputPasswordRecibido);
}

function inputPasswordRecibido(password) {
  chequeaUsuarioPassword(usuario, password);
}

function chequeaUsuarioPassword(user, pass) {
  var encryptedPass = crypto.createHash('md5').update(pass).digest('hex');

  if (database[user] === encryptedPass) {
    console.log('Usuario Autenticado, Bienvenido');
  } else {
    console.log('Credenciales Incorrectas');
  }

  process.exit(0);
}
