import express from 'express';
// import { pool } from './src/config/database.js';
import cron from 'node-cron';
import cors from 'cors';
// import { routes } from './src/routes/routes.js';
// import { cronUsersBd } from './src/controllers/cronUsers.controller.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

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

// Rutas del app
app.use('/wpxfeinco/', routes());


//Escucha
app.listen(PORT, () => {
    console.log('Running server on port', PORT)
  });