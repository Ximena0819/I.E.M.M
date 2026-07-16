import { Router } from "express";
import { actualizarProveedor,
     createProveedor,
      eliminarProveedor, 
      leerProveedor } from "../controller/proveedor.controller.js";

const router = Router();
router.post("/", createProveedor);
router.get("/", leerProveedor);
router.put("/:id", actualizarProveedor);
router.delete("/:id", eliminarProveedor);

export default router;