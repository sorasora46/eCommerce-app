import { Request, Response } from "express";
import { Cart } from "../cart.model.js";
import mongoose from "mongoose";

export const findCartItems = async (userId: string) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const items = await Cart.find({ userId: userId });

  if (!items) throw new Error("Cannot find any item in your cart");

  return items;
};

export const getCartItem = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const cartItems = await findCartItems(userId);

    return res.json(cartItems);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.toString() });
  }
};
