import { Router } from "express";
import { handleLogin } from "./controllers/handleLogin.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { getRefreshToken } from "../../middlewares/getRefreshToken.js";
import { register } from "./controllers/register.js";

const router = Router();

router.post("/login", handleLogin);
router.post("/register", register);
router.get("/test", getRefreshToken, authenticateToken, (req, res) => {
  res.json({
    token1: req.signedCookies.access_token,
    token2: req.signedCookies.refresh_token,
  });
});

export default router;
