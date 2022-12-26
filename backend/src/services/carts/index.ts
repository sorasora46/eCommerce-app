import express, { Request, Response } from "express";
import { getCartItem } from "./controllers/getCartItem.js";
import { addItem } from "./controllers/addItem.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Cart route");
});

router.post("/additem", addItem);
router.get("/getcartitem", getCartItem);

export default router;
