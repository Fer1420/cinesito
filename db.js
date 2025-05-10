// db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.ip,        // Cambia esto si tu base de datos está en otro host
  user: process.env.usuario,   // Tu nombre de usuario
  password: process.env.contra, // Tu contraseña
  database: process.env.bd      // El nombre de la base de datos a la que te quieres conectar
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Exporta la conexión por defecto
export default connection;
