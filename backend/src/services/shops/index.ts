import express, { Request, Response } from "express";
import { register } from "./controllers/register.js";
import { getShop } from "./controllers/getShop.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Shop route");
});

router.post("/register", register);
router.get("/getshop/:shopId", getShop);

export default router;
