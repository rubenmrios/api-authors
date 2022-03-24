Descripción del proyecto

En este proyecto he intentado usar una arquitectura por capas en la que por cada modulo exiten 3 archivos:
    -   Index exporta servicio y ruta
    -   Route es la ruta que se ejecuta, el metodo http y el que se encaga de recoger los datos que llegan del endpoint y ejecutar lo/s servicios correspondientes y devolver una respuesta (datos de la base de datos, etc)
    - Servicio ejecuta algun tipo de funcionalidad en la aplicación por ejemplo ejecutar un dal (consulta a base de datos)
    - Dal es la capa que contiene y ejecuta todas las querys a base de datos y devuelve el resultado al servicio

En el archivo /etc/db/atSistemasMysql.sql:
    -   En este archivo esta la base de datos con las tablas correspondientes.

En el archivo /request/author/...  o   /request/book/... :
    -   Tenemos los endpoints con el tipo de metodo http, ruta y datos que se pueden ejecutar en la api

Middelware: 

    - Configuración de middlewares de express


Proyecto

Instalar node_modules

- npm install

Crear un .env en la carpeta src con estas variables
# PORTS
PORT = 


#MYSQL
MYSQL_HOST = 
MYSQL_USERNAME = 
MYSQL_PASSWORD = 
MYSQL_DATABASE = 
MYSQL_PORT = 

Ejecuta la app en modo desarrollador

- npm run dev

Abre [http://localhost:3000] para la vista en el navegador

Construye la aplicación para producción en la carpeta build.

npm run build


Construido con
[Nodejs] - Libreria javascript
[Typescript] - Tipado de javascript
[Npm] - Manejador de dependxxencias
[Express] - Framework web minimalista, rápido y sin opiniones para node .
[Cors] - Es un paquete de node.js para proporcionar un middleware Connect / Express que se puede usar para habilitar CORS con varias opciones.
[Morgan] - Middleware de registro de solicitudes HTTP para node.js
[Mysql] - Base de datos relacional

Autor
** Rubén Muñoz Rios **
