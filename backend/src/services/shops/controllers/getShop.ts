import { Request, Response } from "express";
import mongoose from "mongoose";
import { Shop } from "../shop.model.js";

export const getShop = async (req: Request, res: Response) => {
  try {
    // const shop = req.cookies // get shop info from access token from cookies
    // if (!shop) throw new Error("Not authenticated")

    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const result = await Shop.findOne({})
    res.json(result)
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
