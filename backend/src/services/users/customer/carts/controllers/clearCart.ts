import { Request, Response } from "express";
import { Cart } from "../models/cart.model.js";

export default function clearCart(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Cart.deleteMany({ userId: userId }, (err: any, result: any) => {
      try {
        if (err) throw err;
        res.send(result);
      } catch (err: any) {
        console.log(err.message);
        return res.send(err.message);
      }
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
