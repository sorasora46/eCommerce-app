import { Request, Response } from "express";
import { Shop } from "../models/shop.model.js";

export default function shopRegister(req: Request, res: Response) {
  try {
    const { userId, email, name } = req.body;
    const imageBuffer = req.file.buffer;
    Shop.create(
      {
        userId: userId,
        email: email,
        name: name,
        profileImage: imageBuffer,
      },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        console.log(result);
        res.send(result);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
