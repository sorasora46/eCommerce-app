import { Request, Response } from "express";
import getUserInfoFromToken from "../../../helpers/getUserInfoFromToken.js";
import { Report } from "../models/report.model.js";
import { User } from "../models/user.model.js";

export default function reportUserById(req: Request, res: Response) {
  try {
    const access_token = req.signedCookies.access_token;
    const reportedUser = req.params.userId;
    const { reason } = req.body;
    getUserInfoFromToken(access_token, async (err: any, user: any) => {
      if (err) throw err;

      const isReportedUserExist = await User.findOne({ userId: reportedUser });
      if (!isReportedUserExist) return res.status(400).send("user not found");

      if (reportedUser === user.userId)
        return res.status(400).send("cannot report yourself");

      Report.create(
        {
          reportBy: user.userId,
          reportedUser: reportedUser,
          reason: reason,
        },
        (err: any, result: any) => {
          if (err) throw err;
          return res.send(result);
        }
      );
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
