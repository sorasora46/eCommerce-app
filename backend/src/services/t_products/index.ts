import { Router } from "express";
import multer from "multer";
import addProduct from "./controllers/addProduct.js";
import getProductById from "./controllers/getProductById.js";
import getProducts from "./controllers/getProducts.js";

const router = Router();
const upload = multer();

router.post(
  "/shop/:userId/addproduct",
  upload.single("productImage"),
  addProduct
);
router.get("/shop/:userId/getproducts", getProducts);
router.get("/:productId", getProductById);

export default router;
