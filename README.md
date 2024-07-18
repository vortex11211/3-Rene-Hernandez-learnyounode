# **Learn you Node**
Para este Sprint, será necesario tener instalado learnyounode.

Puedes instalar el programa Learnyounode, desde la consola o terminal escribiendo:

```npm install -g learnyounode```

para acceder a la pantalla principal ingresaremos desde la terminal 

**learnyounode** 
que nos devolverá una pantalla similar a la siguiente:

![pantalladelearnyounode](https://camo.githubusercontent.com/70a2be60777043e09ddfbcafa67f80b2601ec2a0ff6658f633f721cde7363ed7/68747470733a2f2f7261772e6769746875622e636f6d2f72766167672f6c6561726e796f756e6f64652f6d61737465722f6c6561726e796f756e6f64652e706e67)

El programa propone una serie de retos que en cuanto son verificados, el estatus en la pantalla principal cambia a COMPLETADO

Algunos de los retos requieren la instación de los siguientes paquetes:

```npm install bl```

**```npm install through2-map```**

**```npm i --save-dev @types/through2-map```**

Para comprobar los retos y verificarlos utilizaremos los siguientes comandos en nuestra terminal:

## -Ejercicio 1

**```node 1hello-word.js```**

// Imprime por consola "Hello World"

Para correrlo en un entorno de pruebas usaremos

**```learnyounode run 1hello-word.js```**    

para verificarlo:

**```learnyounode verify 1hello-world.js```**

## -Ejercicio 2

**```node 2baby-steps.js 1 2 3 4```**  

//Suma los números que introduzcas después del nombre del archivo

Para correrlo en un entorno de pruebas usaremos

**```learnyounode run 2baby-steps.js```**    

para verificarlo:

**```learnyounode verify 2baby-steps.js```**

## -Ejercicio 3

**```node 3my-first-io.js lluvia.txt```**

 //Devuelve el número de líneas en un archivo de texto, usando "fs.readFileSync", que es una función síncrona. La ejecución del programa se detiene hasta que la lectura del archivo se completa.

 Para correrlo en un entorno de pruebas usaremos

**```learnyounode run 3my-first-io.js```**    

para verificarlo:

**```learnyounode verify 3my-first-io.js```**

## -Ejercicio 4

**```node 4my-firstasync-io.js lluvia.txt```**

// Devuelve el número de líneas en un archivo de texto, usando fs.readFile, que es una función asíncrona. La ejecución del programa no se detiene mientras se lee el archivo. En su lugar, se proporciona un callback que se ejecuta cuando la lectura se completa.
Para correrlo en un entorno de pruebas usaremos

**```learnyounode run 4my-firstasync-io.js```**    

para verificarlo:

**```learnyounode verify 4my-firstasync-io.js```**

## -Ejercicio 5

**```node 5ls-filter.js dirTest txt```** 

//Filtra los archivos del directorio indicado ("dirTest"), que tienen la extension proporcinada.("txt")
Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 5ls-filter.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 5ls-filter.js```**

## -Ejercicio 6

**```node 6modularMain.js ./dirTest txt```**

//Implementan una función modular (_modularFunction_) que filtra archivos en un directorio (./dirTest) según su extensión (txt) y en caso de error llama a la función callback

Para correrlo en un entorno de pruebas usaremos

**```learnyounode run 6modularMain.js```**    

para verificarlo:

**```learnyounode verify 6modularMain.js```**

## -Ejercicio 7

**```node 7clienteHTTP.js http://www.example.org/```**

//Hace una request al servidor y al usar el método .on() registramos el primer evento, y lo convierte a texto para mostrarlo, en este ejemplo es el código html de la página http://www.example.org.

Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 7clienteHTTP.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 7clienteHTTP.js```**

## -Ejercicio 8

**```node 8httpColect.js http://www.example.org/```**

//Realiza una solicitud a la URL proporcionada como argumento en la línea de comandos, acumula los datos recibidos en forma de cadena, para mostrar la longitud y su contenido.

Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 8httpColect.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 8httpColect.js```**

## -Ejercicio 9

**```node 9malabares.js http:example.org http:example.com http:example.org```**

Realiza solicitudes HTTP a tres URLs diferentes, almacena los datos en un arreglo y luego muestra los datos en orden de las páginas en la consola.

Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 9malabares.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 9malabares.js```**

## -Ejercicio 10

**```node 10timeServer.js 8000```**

//Se crea un servidor utilizando net.createServer(). Cuando un cliente se conecta al servidor, se ejecuta la función de devolución de llamada que envía la hora actual al cliente y cierra la conexión.
Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 10timeServer.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 10timeServer.js```**

## -Ejercicio 11

**```node 11fileServer.js 8000 lluvia.txt```**

//Este programa crea un servidor HTTP que escucha en un puerto específico y lee un archivo  cuando recibe una solicitud. Después de ejecutar el comando, abre tu navegador web y ve a http://localhost:8000.

 Deberías ver el contenido de lluvia.txt mostrado en el navegador.

 Para volver a la consola usa **ctrl+c**

Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 11fileServer.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 11fileServer.js```**

## -Ejercicio 12

**```node 12httpUpperCase.js 3000```**

//Este programa crea un servidor HTTP que toma solicitudes POST, convierte los datos a mayúsculas y envía la respuesta al cliente. Es útil para aplicaciones que requieren transformaciones en tiempo real de los datos recibidos.

Si entras a http://localhost:3000/ verás el texto SEND A POST.

Se puede ejecutar el programa en un entorno de pruebas

**```learnyounode run 12httpUpperCase.js```**

y para verificarlo utilizamos como en los anteriores:

**```learnyounode verify 12httpUpperCase.js```**

## -Ejercicio 13

**```node 13http-json-api-server.js 3000```**

//Este código crea un servidot HTTP que responde a dos tipos de solicitudes.

1.- ```'/api/parsetime'``` : Devolverá las horas, minutos y segundos de la fecha y hora proporcionada en el parámetro 'uso' de la URL

2.- ```´/api/unixtime' ```: Devuelve la marca de tiempo Unix (milisegundos desde el 1 de enero de 1970) de la misma fecha y hora.

El servidor escucha en el puerto especificado como argumento en la línea de comando. (3000).

Una vez ejecutada la línea de comandos, podemos escribir en nuestro explorador, las siguientes direcciones para ver las respuestas en formato JSON:

http://localhost:3000/api/parsetime?iso=2024-07-14T10:14:12.000Z

devuelve: ***{"hour":12,"minute":14,"second":12}***

 y
 
  http://localhost:3000/api/unixtime?iso=2024-07-14T10:14:12.000Z
  
devuelve: ***{"unixtime":1720952052000}***


Debido a la diferencia horaria, las horas introducidas se ven afectadas por la zona en la que se ejecuta nuestro servidor, es posible ajustarlas utilizando: 

```function insertZero(n){```

  ```if (n<10) return '0'+n```

  ```else return ''+n}```

//esta función añadirá los ceros correspondientes tal y como se hizo en un ejercicio anterior

```function parsetime (time) {```

  ```return {```

```hour: insertZero(time.getUTCHours())```

```minute:insertZero(time.getUTCMinutes()),```

```second: insertZero(time.getUTCSeconds())```

```}```

```}```

usando `.getUTC` la hora que coloquemos en nuestro explorador aparecerá tal y como la hemos introducido 

Cabe destacar que usando esta expresión **no pasará el test de learyounode**; ya que se espera que el formato de hora no tenga ceros al inicio.

Se puede ejecutar el programa en un entorno de pruebas

```learnyounode run 13http-json-api-server.js```

y para verificarlo utilizamos como en los anteriores:

```learnyounode verify 113http-json-api-server.js```


Para comprobar la parte de los test asegurate de tener instalado jest

```npm install --save-dev typescript jest ts-jest @types/jest```
```npm i --save-dev @types/mock-fs```

