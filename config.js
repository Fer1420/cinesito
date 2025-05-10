import express from 'express' 
import morgan from 'morgan' 
import  hbs  from "hbs" 
import { fileURLToPath } from "url" 
import { dirname } from "path"
import { config } from 'dotenv'
config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const servidor = express() 

servidor.set('puerto', process.env.PORT || 80 || 8080) 
servidor.use(express.json())  
servidor.use(morgan('dev'))
servidor.use(express.static(`${__dirname}/publicos`))
servidor.use("/css", express.static(`${__dirname}/node_modules/bootstrap/dist/css`))
servidor.use("/js", express.static(`${__dirname}/node_modules/bootstrap/dist/js`))
servidor.set("view engine","hbs") 
hbs.registerPartials(`${__dirname}/views/partials`) 
servidor.listen(servidor.get("puerto"))
export {
    servidor  
}
