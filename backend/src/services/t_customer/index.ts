import { Router } from "express";
import customerRegister from "./controllers/customerRegister.js";
import getCustomerById from "./controllers/getCustomerById.js";
import multer from "multer";

const router = Router();
const upload = multer();

router.post("/register", upload.single("profileImage"), customerRegister);
router.get("/:userId", getCustomerById);

export default router;
