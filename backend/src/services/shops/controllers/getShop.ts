import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import mongoose from "mongoose";
import { Shop } from "../models/shop.model.js";

export const getShop = async (req: Request, res: Response) => {
  try {
    const { access_token } = req.signedCookies; // get user info from access token from cookies
    if (!access_token) throw new Error("Not authenticated");

    const token = access_token.split(" ")[1];
    jsonwebtoken.verify(
      token,
      "very secret access_token_secret string",
      async (err: any, payload: any) => {
        if (err) throw err;
        await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

        const userId = payload._doc.userId;
        const email = payload._doc.email;

        const shop = await Shop.findOne({ userId: userId });

        return res.json({
          userId: userId,
          email: email,
          name: shop.name,
          profileImage: shop.profileImage,
        });
      }
    );
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
