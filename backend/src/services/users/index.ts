import { Router } from "express";
import getUserById from "./controllers/getUserById.js";
import _customerRoute from "./customer/index.js";
import _shopRoute from "./shop/index.js";

const router = Router();

router.get("/getuser/:userId", getUserById);
router.post("/report/:userId", reportUserById);
router.post("/block/:userId", blockUserById);
router.delete("/unblock/:userId", unBlockUserById);
router.use("/customer", _customerRoute);
router.use("/shop", _shopRoute);

export default router;
