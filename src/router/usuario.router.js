import { Router } from "express";
import { actualizarUsuario, 
    createUsuario,
     eliminarUsuario, 
     leerUsuario } 
     from "../controller/usuario.controller";


const router = Router();
router.post("/",  createUsuario);
router.get("/", leerUsuario);
router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

export default router;