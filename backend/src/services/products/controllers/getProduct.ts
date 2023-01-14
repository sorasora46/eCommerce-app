import { Request, Response } from "express";
import { Product } from "../models/product.model.js";
import mongoose from "mongoose";

export const findProduct = async (shopId: string) => {
  const products = await Product.find({ pOwnerId: shopId });

  if (!products) throw new Error("Cannot find product of this shop");

  return products;
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const products = await Product.find({}, null, {
      sort: { pAmountClick: "desc" },
      limit: 10,
    });

    const result = products.map((item) => {
      return {
        productId: item.productId,
        pName: item.pName,
        pPrice: item.pPrice,
        pOwnerId: item.pOwnerId,
        pAmount: item.pAmount,
        pClickAmount: item.pClickAmount,
        pImage: item.pImage.toString("base64"), // it's work!
      };
    });

    res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
