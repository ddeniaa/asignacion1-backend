//creacion de servidor con express:

const express = require('express')//importa el modulo de express, recien instalado.
const bodyParser= require('body-parser')//importa el modulo para poder acceder a los parametro que se envian via POST.
const cors = require('cors');
const app= express(); //guardo en la variable app, express.
const db = require('./config/conexionFirebase')
require('dotenv').config();

//require Rutas:
const libros = require('./routes/libros');
const carrusel = require('./routes/carrusel');



//Rutas:
app.use('/api/libros', libros);
app.use('/api/carrusel', carrusel);




//Middleware de Express:
app.use(express.static('public')); // cliente hace referencia a la carpeta cliente del Fron.

//lectura y parseo del body:
app.use(express.json());

//Middleware de Body-Parser:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Middleware del Cors:
app.use(cors({ origin: true }));


//Conexion a firebase:
db();


//Se levanta el servidor:

app.get("/", (req, res) => {
   res.send("Hello World!");
 });


 app.listen((process.env.PORT || 5000), function(){
   console.log('listening on *:5000');
 });
