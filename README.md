NodeJS 101
=========

Un popurrí de recetas de cocina para meterse en NodeJS de una vez.

# Instalación de NodeJS

Visitemos [esta página](http://nodejs.org/), hay opciones para Windows, Linux y OS X. Encontraremos paquetes adecuados para cada tipo de máquina.

![Pantallazo](http://cl.ly/image/0O3g451W0d3B/Screen%20Shot%202013-01-15%20at%208.14.28%20AM.png)

También, desde luego, podemos compilar desde el código fuente (Teniendo `build-essentials` en Ubuntu, `XCode en OS X, etc):

![Pantallazo](http://cl.ly/image/1K2E190o3u30/Screen%20Shot%202013-01-15%20at%208.15.27%20AM.png)

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
>
````

* Manejo de Strings

(TODO)

* Evaluación de expresiones regulares

(TODO)

* Funciones nativas en JavaScript

(TODO)

* Invocar librerías nativas

(TODO) --- crypto

(TODD) --- path

* Un 'one-liner' simpático: Generador de HahA aleatorio:

````js
> a='HAha';var b=[];for(var i=0;i<200;i++){var j=Math.floor(4*Math.random());if((i%2===0)&&(j%2===1)){j=j-1};if((i%2===1)&&(j%2===0)){j=j+1};b+=a[j]};console.log(b)

HahAHahAhAHaHAHahaHaHahAhaHAHAhahAHaHaHahaHAHahaHAHaHAhaHAHAhAhAHAHAhAhaHaHAHAhaHAHahAhahaHahAhAHaHAHAhaHahahahAHAHAhahAHAHaHAhAhAHAHAhahaHaHAhahahAHAhAHAHahAHAHahAhahahahAhahAHAhAhahahaHAhAHahaHaHAHa
````

Source: [hermanjunge.com](http://hermanjunge.com/post/35334164416/haha-generator)

# Scripts

Escribamos archivos con código sencillo:

* 'Un euler básico de mi colección'

(TODO)

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
