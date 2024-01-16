import express from "express";
import {
  login,
} from "../controllers/InteractionController";

// Crear instancia del router ()
const router = express.Router();

// Lo utilizamos igual que antes app.post -> router.post
router.post("/login", login);
// exportamos el router con el nombre commandRouter
export { router as interactionRouter };
