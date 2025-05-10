import express from 'express';
import bodyParser from 'body-parser';
import { servidor } from './config.js'; 
import routes from './routes.js'; 
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import { validar } from "./funciones_backend/validar_registro.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = servidor;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 
hbs.registerPartials(path.join(__dirname, 'views/partials')); 


app.use('/api', routes); 

const botones = [
  { nombre: "Inicio", ruta: "/" },
  { nombre: "Registro", ruta: "/registro" },
  { nombre: "Login", ruta: "/login" },
  { nombre: "info", ruta: "/contacto" },
  { nombre: "Reservar", ruta: "/Reservar" }
  
];

app.get('/', (req, res) => {
  res.status(200).render('index.hbs', { botones });
});

app.get('/login', (req, res) => {
  res.status(200).render('login.hbs', { botones });
});

app.get("/registro", (req, res) => {
  let  contra  = req.body
  console.log(contra)
  let mensaje="la contraseña no es valida"
 // let mostrar_error= validar(contra=true)
  res.status(200).render('registro.hbs', { botones ,/* mostrar_error, mensaje*/});
});

app.post("/registro", (req, res) => {
    console.log(req.body)
});


app.get("/contacto", (req, res) => {
  res.status(200).render('contacto.hbs', { botones });
});

app.get("/Reservar", (req, res) => {
  res.status(200).render('Reservar.hbs', { botones });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

