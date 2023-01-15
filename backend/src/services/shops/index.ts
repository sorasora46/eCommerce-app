import express, { Request, Response } from "express";
import { register } from "./controllers/register.js";
import { getShop } from "./controllers/getShop.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", (req: Request, res: Response) => {
  res.send("Shop route");
});

router.post("/register", upload.single("profileImage"), register);
router.get("/getshop/:shopId", getShop);

export default router;
