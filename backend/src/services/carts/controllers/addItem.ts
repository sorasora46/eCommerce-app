import { Request, Response } from "express";
import { Cart } from "../cart.model.js";
import { Product } from "../../products/product.model.js";
import mongoose from "mongoose";

export const createCartItem = async (
  userId: string,
  productId: string,
  productAmount: number
) => {
  /** TODO:
   * 1. if the same product already in the cart, add current amount with
   * new amount
   * 2. add amount of products to product model
   * 3. when payment success reduce the amount of products from shop
   * 
   */
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const { pOwnerId } = await Product.findOne({ productId: productId })
  console.log(pOwnerId)

  const newCartItem = await Cart.create({
    userId: userId,
    productId: productId,
    status: "waiting for payment",
    productAmount: productAmount,
  });

  newCartItem
    .save()
    .then()
    .catch((err) => console.log(err));

  return newCartItem;
};

export const addItem = async (req: Request, res: Response) => {
  try {
    const { userId, productId, productAmount } = req.body;
    const result = await createCartItem(userId, productId, productAmount);
    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.toString() });
  }
};
