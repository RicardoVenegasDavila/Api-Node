const { request } = require('express');
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();


//CONECCION A BASE DE DATOS

dbConnection()


//Directorio publico

app.use(express.static('public'))
//CORS

app.use(cors());

//Lectura y parseo del body

app.use(express.json());

//Rutas

app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {

})
console.log(`  servidor corriendo por el puerto ${process.env.PORT} `)