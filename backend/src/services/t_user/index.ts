import { Router } from "express";
import _customerRoute from "./t_customer/index.js";
import _shopRoute from "./t_shop/index.js";

const router = Router();

router.use("/customer", _customerRoute);
router.use("/shop", _shopRoute);

export default router;