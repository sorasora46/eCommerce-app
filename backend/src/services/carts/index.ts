import express, { Request, Response } from "express";
import { getCartItem } from "./controllers/getCartItem.js";
import { addItem } from "./controllers/addItem.js";
import { removeItem } from "./controllers/removeItem.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Cart route");
});

router.post("/additem", addItem);
router.get("/getcart/:userId", getCartItem);
router.delete("/removeitem", removeItem);

export default router;
