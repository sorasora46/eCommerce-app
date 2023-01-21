import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../../users/models/user.model.js";
import { Shop } from "../models/shop.model.js";

export const getShop = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { shopId } = req.params;
    const shop = await Shop.findOne({ userId: shopId });
    const shopUserInfo = await User.findOne({ userId: shopId });

    res.json({
      userId: shop.userId,
      name: shop.name,
      role: shopUserInfo.role,
      email: shopUserInfo.email,
    });
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
