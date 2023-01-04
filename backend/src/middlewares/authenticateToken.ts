import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const access_token = req.cookies.access_token;
    const refresh_token = req.cookies.refresh_token;

    // Redirect to login page when both tokens not found
    if (!access_token && !refresh_token) {
      return res.json({
        redirectUrl: "http://127.0.0.1:5173/login",
        unathorized: true,
      });
    }

    // Verify the token when access token is not expired
    if (access_token) {
      const token = access_token.split(" ")[1];
      jsonwebtoken.verify(
        token,
        "very secret access_token_secret string",
        (err: any, user: any) => {
          if (err) throw err;
          next();
        }
      );
    }

    // Proceed further if above conditions don't satisfied
    next();
  } catch (error: any) {
    console.log(error);
    res.json({ message: error.message });
  }
};
