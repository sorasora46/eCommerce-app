import express, { Request, Response } from "express";
import { addProduct } from "./controllers/addProduct.js";
import { getProduct } from "../products/controllers/getProduct.js";
import { removeProduct } from "../products/controllers/removeProduct.js";
import { getSearchProduct } from "./controllers/getSearchProduct.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", (req: Request, res: Response) => {
  res.send("Product route");
});

router.get("/search", getSearchProduct);
router.post("/addproduct", upload.single("productImage"), addProduct);
router.get("/getproducts", getProduct);
router.delete("/removeproduct", removeProduct);

export default router;
