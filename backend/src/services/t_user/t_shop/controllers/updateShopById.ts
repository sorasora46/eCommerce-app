import { Request, Response } from "express";
import { User } from "../../models/user.model.js";
import { IUpdateShop, Shop } from "../models/shop.model.js";

export default function updateShopById(req: Request, res: Response) {
  try {
    const { email, name } = req.body;
    const profileImage = req.file?.buffer;
    const { userId } = req.params;

    const updatedData: IUpdateShop = {};
    if (email) {
      updatedData.email = email;
      User.findOneAndUpdate(
        { userId: userId },
        updatedData,
        { new: true },
        (err: any, result: any) => {
          if (err) return res.send(err.message);
          res.send(result);
        }
      );
    }
    if (name) updatedData.name = name;
    if (profileImage) updatedData.profileImage = profileImage;

    Shop.findOneAndUpdate(
      { userId: userId },
      updatedData,
      { new: true },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        res.send(result);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
