import express, { Request, Response } from "express";
import { addProduct } from "./controllers/addProduct.js"
import { getProduct } from "../products/controllers/getProduct.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Product route")
});

router.post("/addproduct", addProduct)
router.get("/getshopproducts", getProduct);

export default router
