import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { Auth } from "../models/auth.model.js";
import { IUser, User } from "../../users/models/user.model.js";
import jsonwebtoken from "jsonwebtoken";

export default function handleLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    User.findOne({ email: email }, async (err: any, user: any) => {
      try {
        if (err) throw err;

        const userAuth = await Auth.findOne({ userId: user.userId });
        const isValid = await bcrypt.compare(password, userAuth.hashedPassword);

        if (isValid) {
          return res
            .cookie("access_token", `Bearer ${createLoginToken(user)}`, {
              maxAge: 3600000 * 6, // 6 hours
              signed: true,
              httpOnly: true,
            })
            .send("login success");
        }

        res.status(401).send("not authenticated");
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

function createLoginToken(user: IUser) {
  const accessToken = jsonwebtoken.sign(
    { ...user },
    "replace me with secret from dotenv",
    { expiresIn: "6h" }
  );
  return accessToken;
}
