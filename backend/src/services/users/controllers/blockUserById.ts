import { Request, Response } from "express";
import getUserInfoFromToken from "../../../helpers/getUserInfoFromToken.js";
import { User } from "../models/user.model.js";

export default function blockUserById(req: Request, res: Response) {
  try {
    const access_token = req.signedCookies.access_token;
    const blockedUser = req.params.userId;
    getUserInfoFromToken(access_token, async (err: any, user: any) => {
      if (err) throw err;

      const isBlockedUserExist = await User.findOne({ userId: blockedUser });
      if (!isBlockedUserExist) return res.status(400).send("user not found");

      if (blockedUser === user.userId)
        return res.status(400).send("cannot block yourself");
    // need block logic
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}