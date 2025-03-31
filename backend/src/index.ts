
import express, {Request, Response} from 'express';
import cors from 'cors'; 
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CONNECTION_STRING as string)
.then(()=>{
    console.log("base de datos conectada")
})

const app = express();
app.use(express.json ());
app.use(cors ());

app.get('/', async (req: Request, res: Response) =>{
res.json("Hola mundo desde Express y TypeScript!!!")
}) ;

app. listen (3000, ()=>{
console. log ("App corriendo en el puerto: 3000")
})