
/**
 *  Los passwords son 'cocacola' y 'kryspo'
 *  (para que no se nos olviden)
 */
var database = {
  hermanjunge    : '6253e1406b64bbe6ba7b00ac0bf81257'
, elfenars       : 'b85905d73107fea2b11991dc9bc7f783'
}

// Requerimientos de modulo
var crypto    = require('crypto');
var readline  = require('readline');

var rl = readline.createInterface({
  input   : process.stdin
, output  : process.stdout
});

// Punto de Partida [main()]
rl.question('Ingrese Nombre de Usuario: ', inputUsuarioRecibido);
var usuario;   // <- Necesitamos una variable para almacenar el usuario que recibamos.

function inputUsuarioRecibido (user) {
  usuario = user;
  rl.question('Ingrese Password: ', inputPasswordRecibido);
}

function inputPasswordRecibido (password) {
  chequeaUsuarioPassword(usuario, password);
}

function chequeaUsuarioPassword (user, pass) {
  var encryptedPass = crypto.createHash('md5').update(pass).digest("hex");

  if (database[user] === encryptedPass) {
    console.log('Usuario Autenticado, Bienvenido');
  } else {
    console.log('Credenciales Incorrectas');
  }

  process.exit(0);
}
