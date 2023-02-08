import { Request, Response } from "express";
import { Product } from "../models/product.model.js";

export default function getProductById(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    Product.findOne({ productId: productId }, (err: any, product: any) => {
      if (err) return res.send(err.message);
      console.log(product);
      res.send(product);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
