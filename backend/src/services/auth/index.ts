import { Router } from "express";
import { handleLogin } from "./controllers/handleLogin.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { getRefreshToken } from "../../middlewares/getRefreshToken.js";

const router = Router();

router.post("/login", handleLogin);
router.get("/test", getRefreshToken, authenticateToken, (req, res) => {
  res.json({
    token1: req.cookies.access_token,
    token2: req.cookies.refresh_token,
  });
});

export default router;
