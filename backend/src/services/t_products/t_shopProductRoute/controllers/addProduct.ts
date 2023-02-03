import { Request, Response } from "express";
import { Product } from "../../models/product.model.js";

export default function addProduct(req: Request, res: Response) {
  try {
    const { productId, productName, productPrice, productAmount } = req.body;
    const { userId } = req.params; // shop owner's userId
    const productImage = req.file.buffer;

    Product.create(
      {
        productId,
        productName,
        productPrice,
        productAmount,
        productOwner: userId,
        productImage,
      },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        console.log(result);
        res.send(result);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
