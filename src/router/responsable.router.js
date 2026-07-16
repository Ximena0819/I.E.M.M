import { Router } from "express";
import { actualizarResponsable, createResponsable, eliminarResponsable, leerResponsable } from "../controller/responsable.controller.js";

const router = Router();
router.post("/", createResponsable);
router.get("/", leerResponsable);
router.put("/:id", actualizarResponsable);
router.delete("/:id", eliminarResponsable);

export default router;