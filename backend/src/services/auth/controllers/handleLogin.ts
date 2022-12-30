import { Request, Response } from "express";
import { authUser } from "../authUser.model.js";
import { User } from "../../users/user.model.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import { hashedToken } from "../refreshToken.model.js";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { email, password } = req.body;
    const { hashedPassword } = await authUser.findOne({ email: email });

    if (!hashedPassword) throw new Error("Incorrect email");
    if (!(await bcrypt.compare(password, hashedPassword)))
      throw new Error("Incorrect password");

    const user = await User.findOne({ email: email });
    const expiration = "6h";

    const accessToken = jsonwebtoken.sign(
      { ...user },
      "very secret access_token_secret string",
      { expiresIn: expiration }
    );

    const refreshToken = jsonwebtoken.sign(
      { ...user },
      "very secret refresh_token_secret string"
    );

    const salt = await bcrypt.genSalt();
    const token = await bcrypt.hash(refreshToken, salt);
    const result = await hashedToken.create({
      hashedToken: token,
      userId: user.userId,
    });

    result
      .save()
      .then()
      .catch((err) => console.log(err.message));

    // TODO: create frontend for testing cookies
    // TODO: store tokens inside httpOnly cookie
    // TODO: change logic to extract token from request object
    // res
    //   .cookie("accessToken", `Bearer ${accessToken}`, {
    //     expires: new Date(Date.now() + 6 * 3600000),
    //     httpOnly: true,
    //     secure: true,
    //   })
    //   .cookie("refreshToken", `${refreshToken}`, {
    //     expires: new Date(Date.now() + 24 * 3600000),
    //     httpOnly: true,
    //     secure: true,
    //   });
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
