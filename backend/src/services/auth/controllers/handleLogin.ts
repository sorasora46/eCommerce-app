import { Request, Response } from "express";
import { authUser } from "../authUser.model.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { email, password } = req.body;
    const { hashedPassword } = await authUser.findOne({ email: email });

    if (!hashedPassword) throw new Error("Incorrect email");
    if (!(await bcrypt.compare(password, hashedPassword)))
      throw new Error("Incorrect password");

    res.send("login success");
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
