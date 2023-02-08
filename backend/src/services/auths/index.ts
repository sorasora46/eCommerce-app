import { Router } from "express";
import handleLogin from "./controllers/handleLogin.js";
import handleLogout from "./controllers/handleLogout.js";

const router = Router();

router.post("/login", handleLogin);
router.put("/logout", handleLogout);

export default router;