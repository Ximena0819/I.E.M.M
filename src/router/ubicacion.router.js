import { Router } from "express";
import { actualizarUbicacion, 
    createUbicacion, 
    eliminarUbicacion,
    leerUbicacion } from "../controller/ubicacion.controller.js";

const router = Router();
router.post("/", createUbicacion);
router.get("/", leerUbicacion);
router.put("/:id", actualizarUbicacion);
router.delete("/:id", eliminarUbicacion);

export default router;