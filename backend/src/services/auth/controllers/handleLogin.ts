import { Request, Response } from "express";
import { User } from "../../users/user.model.js";
import { authUser } from "../models/authUser.model.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import { storedRefreshToken } from "../models/refreshToken.model.js";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { email, password } = req.body;
    });


    res
      .cookie("access_token", `Bearer ${accessToken}`, {
        maxAge: 3600000,
        httpOnly: true,
      })
      .cookie("refresh_token", `${refreshToken}`, {
        maxAge: 6 * 3600000,
        httpOnly: true,
      })
      .json({ message: "login success" });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
