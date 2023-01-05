import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/user.model.js";

export const getUser = async (req: Request, res: Response) => {
  try {
    // const user = req.cookies // get user info from access token from cookies
    // if (!user) throw new Error("Not authenticated")

    const { userId } = req.body;

    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const result = await User.findOne({ userId: userId });
    res.json(result);
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
