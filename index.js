const express = require('express')
const path = require('path')
const { dbConnection } = require('./database/config')
require('dotenv').config()
const cors = require('cors')


//* Crear el servidor de express
const app = express()

//* Base de datos
dbConnection()

//* CORS
app.use(cors())

//* Directorio publico
app.use(express.static('public'))

//Lectura y parseo del body
app.use(express.json())

//*rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))
//TODO: CRUD 


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

//*Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corrinedo en pureto ${process.env.PORT}`)
}); 


//rU1Bw3Tknd49BGDh