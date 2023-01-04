import { Router } from "express";
import { handleLogin } from "./controllers/handleLogin.js";
import { getNewAccessToken } from "./controllers/getRefreshToken.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";

const router = Router();

router.post("/login", handleLogin);
router.get("/refresh", getNewAccessToken);
router.get("/test", authenticateToken, (req, res) => {
  res.json({
    token1: req.cookies.access_token,
    token2: req.cookies.refresh_token,
  });
});

export default router;
