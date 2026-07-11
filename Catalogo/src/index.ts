import express from "express";
import albumRouter from "./routes/albumes.js"
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/albumes",albumRouter)
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto ",PORT);
})

