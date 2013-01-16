NodeJS 101
=========

Un popurrí de recetas de cocina para meterse en NodeJS de una vez. Aprenderemos algo de scripting, a entender la idea de los _callbacks_, algo de archivos y un poco de HTTP.

En el Tutorial NodeJS 201 introduciremos Bases de Datos, Reverse Proxing y Arquitectura Básica de APIs, cosa de con estos conocimientos podamos armar un _rudimentario_ sistema de autenticación en NodeJS.

# Instalación de NodeJS

Visitemos [esta página](http://nodejs.org/), hay opciones para Windows, Linux y OS X. Encontraremos paquetes adecuados para cada tipo de máquina.

![Pantallazo](http://cl.ly/image/0O3g451W0d3B/Screen%20Shot%202013-01-15%20at%208.14.28%20AM.png)

También, desde luego, podemos compilar desde el código fuente (Teniendo `build-essentials` en Ubuntu, `XCode` en OS X, etc):

````bash
$ curl -O http://nodejs.org/dist/v0.8.17/node-v0.8.17.tar.gz
$ tar xfvz node-v0.8.17.tar.gz
$ cd node-v0.8.17
$ ./configure
$ make
$ make install
````

Comprobamos con:

````bash
$ node

> process.version
'v0.8.17'
````
Empecemos:

# Consola

Hagamos algunos comandos en consola para entrar en calor:

Invocamos NodeJS con:

````bash
$ node
````

* Operaciones Matemáticas

````js
> 1+1
2
> 2/2
1
> (1+2)*3
9
> Math.sqrt(2)
1.4142135623730951
> 2**2
... 
> Math.pow(2,2)
4
````

* Manejo de Strings

````js
> var a = "hola mundo"
undefined
> a.toUpperCase()
'HOLA MUNDO'
> a.toUpperCase().toLowerCase()
'hola mundo'
> var regex = /hola/
undefined
> regex
/hola/
> regex.exec(a)
[ 'hola',
  index: 0,
  input: 'hola mundo' ]
> a.match(regex)
[ 'hola',
  index: 0,
  input: 'hola mundo' ]
> /mundo/.exec(a)
[ 'mundo',
  index: 5,
  input: 'hola mundo' ]
> var b = "hola horacio"
undefined
> b.match(/ho/)
[ 'ho',
  index: 0,
  input: 'hola horacio' ]
> b.match(/ho/g)
[ 'ho', 'ho' ]
> a.length
10
> for (var i = 0; i<a.length; i++){console.log(a[i])}
h
o
l
a
 
m
u
n
d
o
undefined
````

* Funciones nativas en JavaScript

````js
> encodeURIComponent('20 Hola + +')
'20%20Hola%20%2B%20%2B'
> decodeURIComponent('20%20Hola%20%2B%20%2B')
'20 Hola + +'
````

* Invocar librerías nativas

  - [crypto](http://nodejs.org/api/crypto.html)

````js
> var crypto = require('crypto')
undefined
> crypto
{ Credentials: [Function: Credentials],
  createCredentials: [Function],
  Hash: [Function],
  createHash: [Function],
  Hmac: [Function],
  createHmac: [Function],
  Cipher: [Function],
  createCipher: [Function],
  createCipheriv: [Function],
  Decipher: [Function],
  createDecipher: [Function],
  createDecipheriv: [Function],
  Sign: [Function],
  createSign: [Function],
  Verify: [Function],
  createVerify: [Function],
  DiffieHellman: [Function],
  createDiffieHellman: [Function],
  getDiffieHellman: [Function],
  pbkdf2: [Function],
  randomBytes: [Function],
  pseudoRandomBytes: [Function],
  rng: [Function],
  prng: [Function] }
> var myString = 'password';
undefined
> crypto.createHash('md5').update(myString).digest("hex");
'5f4dcc3b5aa765d61d8327deb882cf99'
````

  - [path](http://nodejs.org/api/path.html)

````js
> var path = require('path')
undefined
> path.join('http://', 'www.google.com', 'reader')
'http:/www.google.com/reader'

// Ejemplo con `http:/` con un slash

> path.join('http:', 'www.google.com', 'reader')
'http:/www.google.com/reader'
````

* Generador de HahA aleatorio:

````js
> a='HAha';var b=[];for(var i=0;i<200;i++){var j=Math.floor(4*Math.random());if((i%2===0)&&(j%2===1)){j=j-1};if((i%2===1)&&(j%2===0)){j=j+1};b+=a[j]};console.log(b)

HahAHahAhAHaHAHahaHaHahAhaHAHAhahAHaHaHahaHAHahaHAHaHAhaHAHAhAhAHAHAhAhaHaHAHAhaHAHahAhahaHahAhAHaHAHAhaHahahahAHAHAhahAHAHaHAhAhAHAHAhahaHaHAhahahAHAhAHAHahAHAHahAhahahahAhahAHAhAhahahaHAhAHahaHaHAHa
````

Source: [hermanjunge.com](http://hermanjunge.com/post/35334164416/haha-generator)

# Scripts

Escribamos archivos con código sencillo:

* Un problema del proyecto Euler

[Problema Número 4, Proyecto Euler](http://projecteuler.net/problem=4)

  - `lib/euler_4.js`

````js
var maximum = 0;

for (var i = 999; i > 99; i--) {
  for (var j = 999; j > 99; j--) {
    var mult = i * j;
    if (isPalindrome(mult + '') && (mult > maximum)) maximum = i * j;
  };
};

console.log(maximum);

// Aux
function isPalindrome (str) {
  return str === str.split("").reverse().join("");
};
````

Lo ejecutamos con:

````bash
$ node lib/euler_4.js
906609
````

![Pantallazo](http://cl.ly/image/3F0x0f0D2y1E/Screen%20Shot%202013-01-15%20at%208.09.01%20PM.png)

* Ver si un `string` es una fecha válida:

````js
var fecha = process.argv[2] || '';

if ( fecha === '') {
  console.log('Por Favor ingresa un parametro correcto, porfi?');
  process.exit(0);
}

console.log(checkDate(fecha));

function checkDate (param) {
  var date = new Date(param)
  if (date.toString() === 'Invalid Date') return false
  return date
}
````

![Pantallazo](http://cl.ly/image/1b1a1u3c1n2v/Screen%20Shot%202013-01-16%20at%205.14.05%20PM.png)

Source: [hermanjunge.com](http://hermanjunge.com/post/33776860860/check-in-nodejs-whether-a-string-param-is-date-or-not)

Más sobre fechas en JS [acá](http://hermanjunge.com/post/33837417540/javascript-date-format)

* 'Autenticación Mega Básica'

 - `lib/mega_basic_auth.js`

````js
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
```

# Un guiño al systema de archivos (file system)

Pasaremos nuestra base de datos a un archivo JSON:

- `data/data_text_base.json`

````json
 {  "hermanjunge"    : "6253e1406b64bbe6ba7b00ac0bf81257"
  , "elfenars"       : "b85905d73107fea2b11991dc9bc7f783"
 } 
````

- `lib/data_text_base.js`

````js

// Requerimientos de modulo
var crypto    = require('crypto');
var readline  = require('readline');
var fs        = require('fs');

// Ahora el database lo sacaremos de un archivo (la primera llamada vendria a ser nuestro main)
fs.readFile('./data/data_text_base.json', 'utf8', onReadFile);

var database; // <-- declaramos esta variable global para almacenar
var rl;       // <-- Necesitamos esta variable en este scope para manipular lecturas de línea

function onReadFile (err, data) {
  if (err) throw err;

  database = JSON.parse(data);

  startProgram();
}

function startProgram () {
  rl = readline.createInterface({
    input   : process.stdin
  , output  : process.stdout
  });

  // Punto de Partida [main()]
  rl.question('Ingrese Nombre de Usuario: ', inputUsuarioRecibido);
  var usuario;   // <- Necesitamos una variable para almacenar el usuario que recibamos.
}

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
````

![Pantallazo](http://cl.ly/image/2U1o2X3Y2n0H/Screen%20Shot%202013-01-16%20at%205.27.41%20PM.png)

# HTTP

## Server

- `lib/megabasic_server.js `

````js
var http = require('http')

http.createServer(onRequest).listen(8888)

console.log("Partio!")

function onRequest(req, res) {
  res.write("hola")
  res.end()
}
````

![Pantallazo](http://cl.ly/image/151J3t1w1D3m/Screen%20Shot%202013-01-16%20at%205.31.37%20PM.png)

![Pantallazo](http://cl.ly/image/0I0u3z0F1o0n/Screen%20Shot%202013-01-16%20at%205.32.10%20PM.png)

- `lib/not_so_basic_server.js`

````js
var http = require('http');

http.createServer(onRequest).listen(8888);

console.log('Partió!')

function onRequest (req, res) {
  basicRouteHandler(req.url);

  function basicRouteHandler (route) {
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

  function responder (text) {
    res.write(text);
    res.end()
  }
}
````

# Conclusión

Seguiremos con más goodies en el tutorial NodeJS 202. Proximamente! Muchas Gracias.
