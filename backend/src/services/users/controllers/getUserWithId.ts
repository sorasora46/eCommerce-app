import { Request, Response } from "express";
import mongoose from "mongoose";
import { User, UserRole } from "../models/user.model.js";

export const getUserWithId = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { userId } = req.params;
    const user = await User.findOne({ userId: userId });
    console.log(userId)

    if (user.role === UserRole.CUSTOMER) {
      return res.redirect(307, `/customer/getcustomer/${userId}`);
    }
    if (user.role === UserRole.SHOP) {
      return res.redirect(307, `/shop/getshop/${userId}`);
    }

    return res.json({ message: "getUser error" });
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
