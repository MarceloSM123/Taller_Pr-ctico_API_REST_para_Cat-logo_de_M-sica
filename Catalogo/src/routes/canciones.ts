import {Router} from "express"
import {crearCancion,obtenerCancion,eliminarCancion} from "../controllers/cancion_controller.js"
import {type Request,type Response,type NextFunction} from "express"

const cancion = (req: Request,  res: Response, next: NextFunction )=>{
const{duracion}=req.body;
if(duracion>30 && duracion<600){
next();
}else{
    res.status(400).json({error: "La cancion debe durar entre 30 y  600 segundos"})
}
}

const router=Router();
router.get("/",obtenerCancion);

router.post("/",cancion,crearCancion);
router.delete("/:id",eliminarCancion);

export default router;
