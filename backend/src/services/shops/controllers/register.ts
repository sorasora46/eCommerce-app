import { Request, Response } from "express";
import { Shop } from "../shop.model.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";

export const createShop = async (
  shop_email: string,
  shop_name: string,
  shop_profileImage: string
) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const sameEmailShop = await Shop.findOne({ email: shop_email });
  const sameNameShop = await Shop.findOne({ sName: shop_name });

  if (sameEmailShop) throw new Error("Shop already exist [Email]");
  if (sameNameShop) throw new Error("Shop already exist [Name]");

  const newShop = await Shop.create({
    shopId: nanoid(),
    sEmail: shop_email,
    sName: shop_name,
    sProfileImage: shop_profileImage,
  });

  newShop
    .save()
    .then()
    .catch((err) => console.log(err));

  return newShop;
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, name, profileImage } = req.body;
    if (email && name) {
      const result = await createShop(email, name, profileImage);
      return res.json(result);
    }
    return res.status(400).json({ message: "register error" });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
