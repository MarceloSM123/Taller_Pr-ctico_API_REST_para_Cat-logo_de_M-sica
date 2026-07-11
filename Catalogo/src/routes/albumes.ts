import {Router} from "express";
import {obtenerAlbumes,crearAlbum,actualizarAlbum,eliminarAlbum} from "../controllers/album_controller.js"

const router = Router();
router.get("/",obtenerAlbumes);
router.post("/",crearAlbum);
router.put("/:id",actualizarAlbum);
router.delete("/:id",eliminarAlbum);

export default router;