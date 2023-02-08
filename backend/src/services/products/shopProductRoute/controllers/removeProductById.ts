import { Request, Response } from "express";
import { Product } from "../../models/product.model.js";

export default function removeProductById(req: Request, res: Response) {
  try {
    const { productId, userId /* shopId */ } = req.params;
    Product.findOneAndDelete(
      { productId: productId, productOwner: userId },
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
