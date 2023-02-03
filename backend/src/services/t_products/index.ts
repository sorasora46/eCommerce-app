import { Router } from "express";
import getProductById from "./controllers/getProductById.js";
import _shopProductRoute from "./t_shopProductRoute/index.js";

const router = Router();

router.use("/shop/:userId", _shopProductRoute);
router.get("/:productId", getProductById);

export default router;
