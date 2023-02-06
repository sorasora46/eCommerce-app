import { Request, Response } from "express";
import { Shop } from "../models/shop.model.js";

export default function getShopById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Shop.findOne({ userId: userId }, (err: any, shop: any) => {
      if (err) return res.send(err.message);
      console.log(shop);
      res.send(shop);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
