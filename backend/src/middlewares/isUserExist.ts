import { NextFunction, Request, Response } from "express";
import { User } from "../services/users/models/user.model.js";

export default function isUserExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;
    User.findOne({ userId: userId }, (err: any, result: any) => {
      if (err) return res.send(err.message);
      next();
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
