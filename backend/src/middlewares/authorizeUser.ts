import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { User } from "../services/users/user.model.js";

export const authorizeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body;

    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const result = await User.findOne({ userId: userId, role: "customer" });
    if (!result) throw new Error("Not authorized");

    next();
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
};
