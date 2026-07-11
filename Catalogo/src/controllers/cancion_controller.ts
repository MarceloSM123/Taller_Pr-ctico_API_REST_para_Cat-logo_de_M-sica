import {type Request,type Response} from "express"
import prisma from "../database/prisma.js"

export const crearCancion=async(req: Request,res: Response)=>{

const {titulo,duracion,albumId}=req.body;
try{
const nuevaCancion=await prisma.cancion.create({   
    data:{titulo,duracion,albumId}
})
res.status(201).json(nuevaCancion);
}catch(error){
res.status(500).json({error: "Error al crear la cancion"})
}
}

export const obtenerCancion=async (req: Request, res: Response)=>{
    try{
        const cancion =await prisma.cancion.findMany();
        res.json(cancion);
    }catch(error){
res.status(500).json({error: "Error al obtener cancion"})
    }
}

export const eliminarCancion = async(req: Request, res: Response)=>{
const {id}=req.params;
try{
await prisma.cancion.delete(
    {where: {id: Number(id)}}
);
res.json({exito:"Cancion eliminada correctamente"})
}catch(error){
res.status(500).json({error: "Error al eliminar la cancion "})
}

}