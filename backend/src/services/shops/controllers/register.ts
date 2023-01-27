import { Request, Response } from "express";
import { Shop } from "../models/shop.model.js";
import mongoose from "mongoose";
import { User } from "../../users/models/user.model.js";
import { resetRegister } from "../../../helpers/resetRegister.js";

export const register = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
    const { email, name } = req.body;
    const { buffer } = req.file
    const { userId } = await User.findOne({ email: email });

    if (name) {
      const result = await createShop(userId, name, buffer);
      return res.json(result);
    }

    resetRegister(true, email);
    return res.status(400).json({ message: "register error" });
  } catch (error: any) {
    console.log(error);
    resetRegister(true, req.body.email);
    res.status(400).json({ message: error.message });
  }
};

export const createShop = async (
  userId: string,
  name: string,
  profileImage: Buffer
) => {
  const newShop = await Shop.create({
    userId: userId,
    name: name,
    profileImage: profileImage,
  });

  newShop
    .save()
    .then()
    .catch((err) => console.log(err));

  return newShop;
};
