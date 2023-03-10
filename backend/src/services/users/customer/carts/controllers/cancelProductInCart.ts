import { Request, Response } from "express";
import { Cart, CartProductStatus } from "../models/cart.model.js";

export default function cancelProductInCart(req: Request, res: Response) {
  try {
    const { userId, productId } = req.params;
    Cart.findOne(
      { userId: userId, productId: productId },
      async (err: any, product: any) => {
        try {
          if (err) throw err;

          if (product.status === CartProductStatus.WAITING) {
            const result = await Cart.findOneAndDelete({
              userId: userId,
              productId: productId,
            });
            return res.send(result);
          }

          res.send("cannot cancel the product");
        } catch (err: any) {
          console.log(err.message);
          return res.send(err.message);
        }
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
