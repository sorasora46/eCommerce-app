import { Request, Response } from "express";
import { Cart, CartProductStatus } from "../models/cart.model.js";

export default function addProductToCart(req: Request, res: Response) {
  try {
    const { productAmount } = req.body;
    const { userId, productId } = req.params;
    const status = CartProductStatus.WAITING;

    Cart.create(
      {
        userId,
        status,
        productId,
        productAmount,
      },
      (err: any, result: any) => {
        try {
          if (err) throw err;
          res.send(result);
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
