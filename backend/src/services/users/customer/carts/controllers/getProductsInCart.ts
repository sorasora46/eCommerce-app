import { Request, Response } from "express";
import { Product } from "../../../../products/models/product.model.js";
import { Cart } from "../models/cart.model.js";

export default function getProductsInCart(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Cart.find({ userId: userId }, async (err: any, cart: any) => {
      try {
        if (err) throw err;

        const joinedData = [];
        for (const item of cart) {
          const product = await Product.findOne({ productId: item.productId });
          if (!product) continue;

          joinedData.push({
            userId: item.userId,
            status: item.status,
            productId: item.productId,
            productAmount: item.productAmount,
            productName: product.productName,
            productPrice: product.productPrice,
            productOwner: product.productOwner,
            productImage: product.productImage,
          });
        }

        res.send(joinedData);
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
