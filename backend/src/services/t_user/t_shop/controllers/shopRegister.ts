import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Role, User } from "../../models/user.model.js";
import { Shop } from "../models/shop.model.js";

export default function shopRegister(req: Request, res: Response) {
  try {
    const { email, name } = req.body;
    const profileImage = req.file.buffer;

    User.create(
      {
        userId: nanoid(),
        email,
        role: Role.SHOP,
      },
      async (err: any, user: any) => {
        if (err) return res.send(err.message);

        const shop = await Shop.create({
          userId: user.userId,
          email,
          name,
          profileImage,
        });

        res.send({
          userId: user.userId,
          email: user.email,
          role: user.role,
          name: shop.name,
          profileImage: shop.profileImage,
        });
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
