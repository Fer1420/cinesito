import { servidor } from './config.js'
const botones = [
   {nombre: "Inicio", ruta: "/"},
   {nombre: "Registro", ruta: "/registro"},
   {nombre: "Login", ruta: "/login"},
   {nombre: "Contacto", ruta: "/contacto"}
]

servidor.get('/', (req,res)=>{
   res.status(200).render('index.hbs', {botones})
})

servidor.get('/login', (req,res)=>{
  
   res.status(200).render('login.hbs', {botones})
})
servidor.get("/registro",(req,res)=>{
   res.status(200).render('registro.hbs',{botones})
})
servidor.get("/contacto",(req,res)=>{
   res.status(200).render('contacto.hbs',{botones})
})
