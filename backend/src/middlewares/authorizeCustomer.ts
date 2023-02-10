import { Request, Response, NextFunction } from "express";
import { Role, User } from "../services/users/models/user.model.js";

export default function authorizeCustomer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;

    User.findOne(
      { userId: userId, role: Role.CUSTOMER },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        next();
      }
    );
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
}
