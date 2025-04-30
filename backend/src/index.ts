
import express, {Request, Response} from 'express';
import cors from 'cors'; 
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

mongoose.connect(process.env.DB_CONNECTION_STRING as string)
.then(()=>{
    console.log("base de datos conectada")
})

const app = express();
app.use(express.json ());
app.use(cors ());

app.use((req, res, next) => {
    console.log("Auth Header recibido:", req.headers.authorization);
    next();
  });

app.use("/api/user", userRoutes)

app. listen (3000, ()=>{
console. log ("App corriendo en el puerto: 3000")
})