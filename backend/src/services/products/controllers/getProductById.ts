import { Request, Response } from "express";
import { Product } from "../models/product.model.js";

export default function getProductById(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    Product.findOne({ productId: productId }, (err: any, product: any) => {
      try {
        if (err) throw err;
        console.log(product);
        res.send(product);
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
