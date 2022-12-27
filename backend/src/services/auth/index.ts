import { Router } from "express";
import { handleLogin } from "./controllers/handleLogin.js";

const router = Router();

router.post("/login", handleLogin);

export default router;
