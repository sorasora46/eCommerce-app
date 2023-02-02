import { Request, Response } from "express";
import { Shop } from "../models/shop.model.js";

export default function getShopById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Shop.findOne({ userId: userId }, (err: any, customer: any) => {
      if (err) throw err;
      console.log(customer);
      res.send(customer);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
