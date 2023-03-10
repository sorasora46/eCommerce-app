import { Router } from "express";
import addProductToCart from "./controllers/addProductToCart.js";
import clearCart from "./controllers/clearCart.js";
import getProductsInCart from "./controllers/getProductsInCart.js";
import removeProductFromCart from "./controllers/removeProductFromCart.js";
import updateProductInCart from "./controllers/updateProductInCart.js";
import cancelProductInCart from "./controllers/cancelProductInCart.js";

const router = Router({ mergeParams: true });

/** Cart is not actually a data object.
 * It's a representation of array of products that
 * customer put it together
 */

router.get("/getproducts", getProductsInCart);
router.delete("/clearcart", clearCart);
router.post("/addproduct/:productId", addProductToCart);
router.delete("/remove/:productId", removeProductFromCart);
router.put("/update/:productId", updateProductInCart);
router.delete("/cancel/:productId", cancelProductInCart);

export default router;
