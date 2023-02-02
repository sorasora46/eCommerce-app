import { Router } from "express";
import customerRegister from "./controllers/customerRegister.js";
import getCustomerById from "./controllers/getCustomerById.js";

const router = Router();

router.post("/register", customerRegister);
router.get("/:userId", getCustomerById);

export default router;
