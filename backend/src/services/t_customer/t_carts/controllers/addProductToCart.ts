import { Request, Response } from "express";
import { Cart } from "../models/cart.model.js";

export default function addProductToCart(req: Request, res: Response) {
  try {
    const {
      status,
      shopName,
      shopId,
      productId,
      productAmount,
      productName,
      productPrice,
    } = req.body;
    const productImage = req.file.buffer;
    const { userId } = req.params;

    Cart.create(
      {
        userId,
        shopName,
        shopId,
        productId,
        productAmount,
        productName,
        productPrice,
        status,
        productImage,
      },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        res.send(result);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
