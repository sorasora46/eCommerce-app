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
    validateUserData(email, password).catch((err) => {
      throw err;
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

async function validateUserData(
  email: string,
  password: string
): Promise<boolean> {
  // Find user's hashedPassword by the email
  const { hashedPassword } = await authUser.findOne({ email: email });

  // Check if the email exist
  if (!hashedPassword) throw new Error("Incorrect email");

  // Check if the password is correct
  if (!(await bcrypt.compare(password, hashedPassword)))
    throw new Error("Incorrect password");
  return true;
}
