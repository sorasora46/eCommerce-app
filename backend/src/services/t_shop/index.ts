import { Router } from "express";
import getShopById from "./controllers/getShopById.js";
import shopRegister from "./controllers/shopRegister.js";

const router = Router();

router.post("/register", shopRegister);
router.get("/:userId", getShopById);

export default router;
