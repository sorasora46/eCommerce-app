import { Router } from "express";
import getUserById from "./controllers/getUserById.js";
import _customerRoute from "./t_customer/index.js";
import _shopRoute from "./t_shop/index.js";

const router = Router();

router.get("/getuser/:userId", getUserById);
router.use("/customer", _customerRoute);
router.use("/shop", _shopRoute);

export default router;
