import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) throw new Error("Authorization Token not found");

    const token = authHeader.split(" ")[1];
    jsonwebtoken.verify(
      token,
      "very secret access_token_secret string",
      (err: any, user: any) => {
        if (err) throw err;
        req.user = user;
        next();
      }
    );
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
};
