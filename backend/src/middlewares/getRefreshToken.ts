import { Request, Response, NextFunction } from "express";
import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";
import { HashedRefreshToken } from "../services/auth/models/refreshToken.model.js";
import bcrypt from "bcrypt";

export const getRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { access_token, refresh_token } = req.cookies;

    // If already login then proceed further
    if (access_token && refresh_token) {
      next();
    }

    // If access_token is expired
    if (!access_token && refresh_token) {
      const user = jsonwebtoken.verify(
        refresh_token,
        "very secret refresh_token_secret string"
      ) as JwtPayload;

      await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
      const tokens = (
        await HashedRefreshToken.find({ userId: user._doc.userId })
      ).map((item) => item.hashedRefreshToken);

      // be careful here Array.find does not return boolean.
      // if the condition is not satisfied, it returns undefined.
      const valid = tokens.some(
        async (token) => await bcrypt.compare(refresh_token, token)
      );
      if (!valid) throw new Error("Forbidden");
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

          res.cookie("access_token", `Bearer ${accessToken}`, {
            httpOnly: true,
          });

          next();
        }
      );
    }

    // Proceed further if above conditions don't satisfied
    next();
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
};
