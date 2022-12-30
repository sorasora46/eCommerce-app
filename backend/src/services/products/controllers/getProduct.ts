import { Request, Response } from "express";
import { Product } from "../product.model.js";
import mongoose from "mongoose";

export const findProduct = async (shopId: string) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const products = await Product.find({ pOwnerId: shopId });

  if (!products) throw new Error("Cannot find product of this shop");

  return products;
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { shopId } = req.body;

    const products = await findProduct(shopId);

    return res.json(products);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
