import bcrypt from 'bcryptjs'; 
import connection from './db.js';  

export const registerUser = (req, res) => {
  console.log('Datos recibidos:', req.body); 
  const { email, password, birth_date } = req.body;


  if (!email || !password || !birth_date) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

 
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  connection.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al verificar el correo en la base de datos');
    }

    if (results.length > 0) {
      return res.status(400).send('El correo ya está registrado');
    }

    
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al encriptar la contraseña');
      }

      const insertQuery = 'INSERT INTO users (email, password, birth_date) VALUES (?, ?, ?)';
      connection.query(insertQuery, [email, hashedPassword, birth_date], (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send('Error al registrar el usuario');
        }

        res.status(200).send('Usuario registrado exitosamente');
      });
    });
  });
};
