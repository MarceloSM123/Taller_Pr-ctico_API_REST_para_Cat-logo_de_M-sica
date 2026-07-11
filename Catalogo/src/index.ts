import express, {type Request, type Response} from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/pin", (req: Request, res: Response)=>{  
    res.send("Servidor funcionado con TypeScript");  
})

app.listen(PORT, ()=>{  
    console.log("Servidor corriendo en el puerto: ", PORT)  
})