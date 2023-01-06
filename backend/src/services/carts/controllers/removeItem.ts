import { Request, Response } from "express";
import { Cart } from "../models/cart.model.js";
import mongoose from "mongoose";

export const deleteItem = async (productId: string) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const foundProduct = await Cart.findOne({
    productId: productId,
  });
  if (!foundProduct) throw new Error("Product not found");

  const result = await Cart.remove({ productId: productId });
  return result;
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const result = await deleteItem(productId);
    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
