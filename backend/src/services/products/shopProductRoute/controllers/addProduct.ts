import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Product } from "../../models/product.model.js";

export default function addProduct(req: Request, res: Response) {
  try {
    const { productName, productPrice, productAmount } = req.body;
    const { userId } = req.params; // shop owner's userId
    const productImage = req.file.buffer;

    Product.create(
      {
        productId: nanoid(),
        productName,
        productPrice,
        productAmount,
        productOwner: userId,
        productImage,
      },
      (err: any, result: any) => {
        try {
          if (err) throw err;
          console.log(result);
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
