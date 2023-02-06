import { Router } from "express";
import getShopById from "./controllers/getShopById.js";
import shopRegister from "./controllers/shopRegister.js";
import deleteShopById from "./controllers/deleteShopById.js";
import updateShopById from "./controllers/updateShopById.js";
import multer from "multer";

const router = Router();
const upload = multer();

router.post("/register", upload.single("profileImage"), shopRegister);
router.get("/:userId", getShopById);
router.delete("/:userId/delete", deleteShopById);
router.put("/:userId/update", upload.single("profileImage"), updateShopById);

export default router;
