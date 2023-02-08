import { Request, Response } from "express";
import { User } from "../../models/user.model.js";
import { Shop } from "../models/shop.model.js";

export default function getShopById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    User.findOne({ userId: userId }, async (err: any, user: any) => {
      if (err) return res.send(err.message);

      const shop = await Shop.findOne({ userId: userId });

      res.send({
        userId: user.userId,
        email: user.email,
        role: user.role,
        name: shop.name,
        profileImage: shop.profileImage,
      });
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
