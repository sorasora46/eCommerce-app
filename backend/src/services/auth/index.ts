import { Router } from "express";
import { handleLogin } from "./controllers/handleLogin.js";
import { getNewAccessToken } from "./controllers/getRefreshToken.js";

const router = Router();

router.post("/login", handleLogin);
router.post("/refresh", getNewAccessToken);
router.get("/test", (req, res) => {
  console.log(req.cookies);
  res.json({ cookie: req.cookies});
});

export default router;
