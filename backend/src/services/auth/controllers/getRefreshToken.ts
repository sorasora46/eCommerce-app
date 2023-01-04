import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import mongoose from "mongoose";
import { storedRefreshToken } from "../models/refreshToken.model.js";
import bcrypt from "bcrypt";

export const getNewAccessToken = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
    const tokens = (await hashedToken.find({})).map((item) => item.hashedToken);
    const { refresh_token } = req.cookies;

    if (!refreshToken) throw new Error("Refresh Token not found");

    // be careful here Array.find does not return boolean.
    // if the condition is not satisfied, it returns undefined.
    const matchingToken = tokens.find(
      async (token) => await bcrypt.compare(refreshToken, token)
    );
    if (!!matchingToken) throw new Error("Forbidden")

    jsonwebtoken.verify(
      refreshToken,
      "very secret refresh_token_secret string",
      (err: any, user: any) => {
        if (err) throw err;

        const expiration = "6h";
        const accessToken = jsonwebtoken.sign(
          user,
          "very secret access_token_secret string",
          { expiresIn: expiration }
        );

        res.json({ accessToken: accessToken });
      }
    );
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
};
