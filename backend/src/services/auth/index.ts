import { Router } from "express";
import { handleLogin } from "./controllers/handleLogin.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { getRefreshToken } from "../../middlewares/getRefreshToken.js";
import { register } from "./controllers/register.js";
import { logout } from "./controllers/logout.js";
import multer from "multer";

const router = Router();
const upload = multer();

router.post("/login", handleLogin);
router.post("/register", upload.single("profileImage"), register);
router.get("/logout", logout);
router.get("/test", getRefreshToken, authenticateToken, (req, res) => {
  res.json({
    token1: req.signedCookies.access_token,
    token2: req.signedCookies.refresh_token,
  });
});

export default router;
