import { Router } from "express";
import customerRegister from "./controllers/customerRegister.js";
import getCustomerById from "./controllers/getCustomerById.js";
import deleteCustomerById from "./controllers/deleteCustomerById.js";
import updateCustomerById from "./controllers/updateCustomerById.js";
import _cartRoute from "./carts/index.js";
import multer from "multer";

const router = Router();
const upload = multer();

router.post("/register", upload.single("profileImage"), customerRegister);
router.use("/:userId/cart", _cartRoute);
router.delete("/:userId/delete", deleteCustomerById);
router.get("/:userId", getCustomerById);
router.put("/:userId/update", upload.single("profileImage"), updateCustomerById);

export default router;
