import { Router } from "express";
import {
crearCategoria,
leerCategorias,
actualizarCategoria,
eliminarCategoria,
} from "../controller/categorias.controller.js";

const router = Router();
router.post("/", crearCategoria);
router.get("/", leerCategorias);
router.put("/:id", actualizarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;