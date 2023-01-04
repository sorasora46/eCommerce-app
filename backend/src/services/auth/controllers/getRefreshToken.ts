import jsonwebtoken from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { storedRefreshToken } from "../models/refreshToken.model.js";
import bcrypt from "bcrypt";

export const getNewAccessToken = async (req: Request, res: Response) => {
  try {
    const { refresh_token } = req.cookies;
    if (!refresh_token) throw new Error("Refresh Token not found");

    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
    const tokens = (await storedRefreshToken.find({})).map(
      (item) => item.hashedToken
    );

    // be careful here Array.find does not return boolean.
    // if the condition is not satisfied, it returns undefined.
    const matchingToken = tokens.find(
      async (token) => await bcrypt.compare(refresh_token, token)
    );
    if (!!matchingToken) throw new Error("Forbidden");
    // hashed token in database always valid
    // after the user login to the system, the valid token was hashed and
    // stored in database as soon as it was created

    jsonwebtoken.verify(
      refresh_token,
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
