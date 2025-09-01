const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mysql2 = require('mysql2');
const CryptoJS = require("crypto-js");
dotenv.config();

/* Database */
const config = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

// Crear la conexión a la base de datos
const pool = mysql2.createPool(config);

// Puerto
const PORT = 3000;

// SERVIDOR
const app = express();

// habilitar body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions = {
  origin: "https://feinco.com.co",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

//Habiliar los cors
app.use(cors(corsOptions));

//Escucha
app.listen(PORT, () => {
  console.log('Running server on port', PORT)
});

// Rutas del app
app.get('/wpxfeinco/types_credit/', (req, res) => {
  const sql = `SELECT * FROM ${config.database}.wp_type_credit_dates;`;
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en la consulta", error: err });
    }
    let Data = CryptoJS.AES.encrypt(
      JSON.stringify(result),
      'X4mg=7xuQtr?HsK0mfZ1PvDoXemduEBMVTfI3FddvjuyK9iDBPnydVomZc5oe!VAAMvY!MwQn4jXoI5Qdmx4P7H6PKoaWXBbjgxrKA!gh!260kNlF!4enly5UPhn/QXT'
    );
    return res.json(Data.toString());
  });
});

// Reporte de usuarios
app.get('/wpxfeinco/users_report/', (req, res) => {
  const sql = `SELECT * FROM ${config.database}.wp_users_excel_credit;`;
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en la consulta", error: err });
    }
    let Data = CryptoJS.AES.encrypt(
      JSON.stringify(result),
      'ypdtelrKUDFUy!71Z?1GmgBN?9RtnhFkA7hCy7j7df73qCWe30W=3wAr5850=DZPehpo3KQ-7I=VhjoKEmC6!n6sHGqAG=T0oC7EoWvZbzyyZQrjeLVY6ZG1Y-Y6?xA0'
    );
    return res.json(Data.toString());
  });
});


