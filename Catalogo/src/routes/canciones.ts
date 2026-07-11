import {Router} from "express"
import {crearCancion,obtenerCancion,eliminarCancion} from "../controllers/cancion_controller.js"

const router=Router();
router.get("/",obtenerCancion);
router.post("/",crearCancion);
router.delete("/:id",eliminarCancion);

export default router;
