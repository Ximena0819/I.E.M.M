import { Router } from "express";
import {
crearImplemento,
leerImplementos,
actualizarImplemento,
eliminarImplemento,
} from "../controller/implemento.controller.js";

const router = Router();
router.post("/", crearImplemento);
router.get("/", leerImplementos);
router.put("/:id", actualizarImplemento);
router.delete("/:id", eliminarImplemento);

export default router;