import { Router } from "express";
import customerRegister from "./controllers/customerRegister.js";
import getCustomerById from "./controllers/getCustomerById.js";
import _cartRoute from "./t_carts/index.js";
import multer from "multer";
import deleteCustomerById from "./controllers/deleteCustomerById.js";

const router = Router();
const upload = multer();

router.post("/register", upload.single("profileImage"), customerRegister);
router.use("/:userId/cart", _cartRoute);
router.delete("/:userId/delete", deleteCustomerById);
router.get("/:userId", getCustomerById);

export default router;
