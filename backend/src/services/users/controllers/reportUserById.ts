import { Request, Response } from "express";
import getUserInfoFromToken from "../../../helpers/getUserInfoFromToken.js";
import { Report } from "../models/report.model.js";

export default function reportUserById(req: Request, res: Response) {
  try {
    const access_token = req.signedCookies.access_token;
    const reportedUser = req.params.userId;
    const { reason } = req.body;
    getUserInfoFromToken(access_token, (err: any, user: any) => {
      if (err) throw err;
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
