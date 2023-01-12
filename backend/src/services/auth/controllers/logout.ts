import { Request, Response } from "express";
import mongoose from "mongoose";
import { HashedRefreshToken } from "../models/refreshToken.model.js";
import jsonwebtoken from "jsonwebtoken";

export const logout = async (req: Request, res: Response) => {
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

        await HashedRefreshToken.findOneAndDelete({ userId: userId });

        return res
          .cookie("access_token", "", { maxAge: 0 })
          .cookie("refresh_token", "", { maxAge: 0 })
          .json({
            isLogout: true,
          });
      }
    );
  } catch (error: any) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};
