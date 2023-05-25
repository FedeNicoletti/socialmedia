import express from "express";
import { login, register } from "../controllers/auth.js"; // Importar la función register

const router = express.Router();

router.post("/login", login);
router.post("/register", register); // Agregar esta línea para la ruta /auth/register

export default router;
