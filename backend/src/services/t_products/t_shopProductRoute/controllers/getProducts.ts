import { Request, Response } from "express";
import { Product } from "../../models/product.model.js";

export default function getProducts(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Product.find({ productOwner: userId }, (err: any, products: any) => {
      if (err) return res.send(err.message);
      console.log(products);
      res.send(products);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
