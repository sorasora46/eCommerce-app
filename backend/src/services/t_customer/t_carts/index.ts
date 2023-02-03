import { Router } from "express";
import addProductToCart from "./controllers/addProductToCart.js";
import getProductsInCart from "./controllers/getProductsInCart.js";
import removeProductFromCart from "./controllers/removeProductFromCart.js";
import multer from "multer";

const router = Router({ mergeParams: true });
const upload = multer();

router.get("/", getProductsInCart);
router.post("/addproduct", upload.single("productImage"), addProductToCart);
router.delete("/remove/:productId", removeProductFromCart);

export default router;
