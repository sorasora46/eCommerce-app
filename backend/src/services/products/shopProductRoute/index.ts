import { Router } from "express";
import multer from "multer";
import addProduct from "./controllers/addProduct.js";
import getProducts from "./controllers/getProducts.js";
import removeProductById from "./controllers/removeProductById.js";
import updateProductById from "./controllers/updateProductById.js";

const router = Router({ mergeParams: true });
const upload = multer();

router.post("/addproduct", upload.single("productImage"), addProduct);
router.get("/getproducts", getProducts);
router.delete("/remove/:productId", removeProductById);
router.put(
  "/update/:productId",
  upload.single("productImage"),
  updateProductById
);

export default router;
