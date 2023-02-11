import { Request, Response } from "express";
import { IUpdateProduct, Product } from "../../models/product.model.js";

export default function updateProductById(req: Request, res: Response) {
  try {
    const { productId, userId /* shopId */ } = req.params;
    const { productName, productPrice, productAmount } = req.body;
    const productImage = req.file?.buffer;

    const updatedData: IUpdateProduct = {};
    if (productName) updatedData.productName = productName;
    if (productPrice) updatedData.productPrice = productPrice;
    if (productAmount) updatedData.productAmount = productAmount;
    if (productImage) updatedData.productImage = productImage;

    Product.findOneAndUpdate(
      { productId: productId, productOwner: userId },
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
