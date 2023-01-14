import { Request, Response } from "express";
import mongoose from "mongoose";
import { Shop } from "../models/shop.model.js";

export const getShop = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { shopId } = req.params;
    const shop = await Shop.findOne({ userId: shopId });
    res.json(shop);
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
