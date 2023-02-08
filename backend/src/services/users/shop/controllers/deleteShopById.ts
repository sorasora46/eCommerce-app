import { Request, Response } from "express";
import { Auth } from "../../../auths/models/auth.model.js";
import { User } from "../../models/user.model.js";
import { Shop } from "../models/shop.model.js";

export default function deleteShopById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    User.findOneAndDelete(
      { userId: userId },
      async (err: any, userResult: any) => {
        if (err) return res.send(err.message);

        const shopResult = await Shop.findOneAndDelete({ userId: userId });

        await Auth.findOneAndDelete({
          userId: userId,
        });

        res.send({
          user: userResult,
          shop: shopResult,
        });
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
