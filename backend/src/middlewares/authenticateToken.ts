import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

export default function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const access_token = req.signedCookies.access_token;

    if (access_token) {
      const token = access_token.split(" ")[1];
      jsonwebtoken.verify(
        token,
        "replace me with secret from dotenv",
        (err: any, _: any) => {
          if (err) throw err;
          next();
        }
      );
    }

    res.status(401).send("not authenticated");
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
