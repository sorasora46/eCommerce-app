import express, { Request, Response } from "express";
import { addProduct } from "./controllers/addProduct.js";
import { getProduct } from "../products/controllers/getProduct.js";
import { removeProduct } from "../products/controllers/removeProduct.js";
import { getSearchProduct } from "./controllers/getSearchProduct.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Product route");
});

router.get("/search", getSearchProduct);
router.post("/addproduct", addProduct);
router.get("/getproducts", getProduct);
router.delete("/removeproduct", removeProduct);

export default router;
