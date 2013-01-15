NodeJS 101
=========

Un popurrí de recetas de cocina para meterse en NodeJS de una vez.

# Instalación de NodeJS

Visitemos [esta página](http://nodejs.org/), hay opciones para Windows, Linux y OS X. Encontraremos paquetes adecuados para cada tipo de máquina.

![Pantallazo](http://cl.ly/image/0O3g451W0d3B/Screen%20Shot%202013-01-15%20at%208.14.28%20AM.png)

También, desde luego, podemos compilar desde el código fuente (Teniendo `build-essentials` en Ubuntu, `XCode en OS X, etc):

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
> 10%2
0
> 11%1
0
> 2**2
... 
> Math.pow(2,2)
4
````

* Manejo de Strings

````js
> var a = "hola mundo";
undefined
> a.toUpperCase()
'HOLA MUNDO'
> a.toUpperCase().toLowerCase()
'hola mundo'
> var regex = /hola/;
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

* 'Un euler básico de mi colección'

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

(TODO)

Source: [hermanjunge.com](http://hermanjunge.com/post/33776860860/check-in-nodejs-whether-a-string-param-is-date-or-not)

* 'Un ejemplo de recursión de cola'

(TODO)

* ----- 'Que use un require nativo'

(TODO)

* ----- 'Que use un require de libreria, para descargarla con npm'

(TODO)

# Administración de Archivos

(TODO)

# Bases de Datos

## MySQL

(TODO)

## MongoDB

(TODO)

# HTTP

## Server

(TODO)

## Requests a otros server

(TODO)

# APIs

(TODO)
