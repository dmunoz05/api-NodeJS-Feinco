const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mysql2 = require('mysql2');
dotenv.config();

const PORT = 3000;

// SERVIDOR
const app = express();

// habilitar body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions = {
    // origin: "https://plataformain.com", 
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Habilita el intercambio de cookies y encabezados de autorización
    optionsSuccessStatus: 204,
};

//Habiliar los cors
app.use(cors(corsOptions));

//Escucha
app.listen(PORT, () => {
    console.log('Running server on port', PORT)
});


// Rutas del app
app.get('/wpxfeinco/', async (req, res) => {
    res.json({message: 'Prueba backend Feinco'})
});