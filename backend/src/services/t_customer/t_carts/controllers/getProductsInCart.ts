import { Request, Response } from "express";
import { Cart } from "../models/cart.model.js";

export default function getProductsInCart(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Cart.find({ userId: userId }, (err: any, cart: any) => {
      if (err) return res.send(err.message);
      res.send(cart);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
