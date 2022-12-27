import { Request, Response } from "express";
import { authUser } from "../authUser.model.js";
import { User } from "../../users/user.model.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { email, password } = req.body;
    const { hashedPassword } = await authUser.findOne({ email: email });

    if (!hashedPassword) throw new Error("Incorrect email");
    if (!(await bcrypt.compare(password, hashedPassword)))
      throw new Error("Incorrect password");

    const user = await User.findOne({ email: email });
    const expiration = "12h";

    const accessToken = jsonwebtoken.sign(
      { ...user },
      "very secret access_token_secret string",
      { expiresIn: expiration }
    );

    res.json({ accessToken: accessToken });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
