import { Request, Response } from "express";
import { Product } from "../models/product.model.js";
import mongoose from "mongoose";

export const deleteProduct = async (shopId: string, productId: string) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const foundProduct = await Product.findOne({
    pOwnerId: shopId,
    productId: productId,
  });
  if (!foundProduct) throw new Error("Product not found");

  const result = await Product.remove({ productId: productId });
  return result;
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const { shopId, productId } = req.body;
    const result = await deleteProduct(shopId, productId);
    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
