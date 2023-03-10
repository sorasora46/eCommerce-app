import { Request, Response } from "express";
import { Cart, IUpdateCart } from "../models/cart.model.js";

export default function updateProductInCart(req: Request, res: Response) {
  try {
    const { userId, productId } = req.params;
    const { status, productAmount } = req.body;

    const updatedData: IUpdateCart = {};
    if (status && productAmount)
      throw new Error(
        "cannot change status and product amount at the sametime"
      );
    if (status && !productAmount) updatedData.status = status;
    if (!status && productAmount) updatedData.productAmount = productAmount;

    Cart.findOneAndUpdate(
      { userId: userId, productId: productId },
      updatedData,
      { new: true },
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
