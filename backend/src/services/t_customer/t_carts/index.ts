import { Router } from "express";
import addProductToCart from "./controllers/addProductToCart.js";
import getProductsInCart from "./controllers/getProductsInCart.js";
import removeProductFromCart from "./controllers/removeProductFromCart.js";

const router = Router({ mergeParams: true });

router.get("/", getProductsInCart);
router.delete("/remove/:productId", removeProductFromCart);

export default router;
