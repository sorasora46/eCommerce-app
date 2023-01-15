import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { UserRole } from "../models/user.model.js";

export const getUser = async (req: Request, res: Response) => {
  try {
    const { access_token } = req.signedCookies; // get user info from access token from cookies
    if (!access_token) throw new Error("Not authenticated");

    const token = access_token.split(" ")[1];
    jsonwebtoken.verify(
      token,
      "very secret access_token_secret string",
      (err: any, user: any) => {
        if (err) throw err;
        if (user._doc.role === UserRole.CUSTOMER)
          return res.redirect(307, `/customer/getcustomer/${user._doc.userId}`)
        if (user._doc.role === UserRole.SHOP)
          return res.redirect(307, `/shop/getshop/${user._doc.userId}`)
      }
    );
  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
