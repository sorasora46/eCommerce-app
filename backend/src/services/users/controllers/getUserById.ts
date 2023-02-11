import { Request, Response } from "express";
import { User } from "../models/user.model.js";

export default function getUserById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    User.findOne({ userId: userId }, (err: any, user: any) => {
      try {
        if (err) throw err;
        const role = user.role;
        return res.redirect(307, `/t_user/${role}/${userId}`);
      } catch (err: any) {
        console.log(err.message);
        return res.send(err.message);
      }
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
