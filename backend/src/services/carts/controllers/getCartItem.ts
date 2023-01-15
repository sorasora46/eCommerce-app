import { Request, Response } from "express";
import { Cart } from "../models/cart.model.js";
import mongoose from "mongoose";

export const findCartItems = async (userId: string) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const items = await Cart.find({ userId: userId });
  if (!items) throw new Error("Cannot find any item in your cart");

  return items;
};

export const getCartItem = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const cartItems = await findCartItems(userId);

    const result = cartItems.map((item) => {
      return {
        userId: item.userId,
        productId: item.productId,
        status: item.status,
        productAmount: item.productAmount,
        pName: item.pName,
        pPrice: item.pPrice,
        pImage: item.pImage,
        shopName: item.shopName,
        shopId: item.shopId,
      };
    });

    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
