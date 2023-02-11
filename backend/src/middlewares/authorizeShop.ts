import { Request, Response, NextFunction } from "express";
import { Role, User } from "../services/users/models/user.model.js";

export default function authorizeShop(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;

    User.findOne(
      { userId: userId, role: Role.SHOP },
      (err: any, result: any) => {
        try {
          if (err) throw err;
          next();
        } catch (err: any) {
          console.log(err.message);
          return res.send(err.message);
        }
      }
    );
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
}
