import { Request, Response } from "express";
import { Shop } from "../models/shop.model.js";

export default function deleteShopById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Shop.findOneAndDelete({ userId: userId }, (err: any, result: any) => {
      if (err) return res.send(err.message);
      res.send(result);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
