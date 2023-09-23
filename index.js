const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mysql2 = require('mysql2');
dotenv.config();

/* Database */
const config = {
  host: "185.239.210.1",
  port: "3306",
  user: "u224736136_RfpIO",
  password: "|bn/+ilB@8",
  database: "u224736136_yHrbs",
};

const pool = mysql2.createPool(config);


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
  res.json({ message: 'Prueba backend Feinco' })
});

// Rutas del app
app.get('/wpxfeinco/users_report/', async (req, res) => {
  const sql = 'SELECT * FROM u224736136_yHrbs.wp_users_excel_credit;';
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en la consulta", error: err });
    }
    return res.json(result);
  });
});


// Rutas del app
app.get('/wpxfeinco/types_credit/', async (req, res) => {
  const sql = 'SELECT * FROM u224736136_yHrbs.wp_type_credit_dates;';
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en la consulta", error: err });
    }
    return res.json(result);
  });
});