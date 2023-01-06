import { Request, Response } from "express";
import { User, UserRole } from "../models/user.model.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, role } = req.body;
    if (email && role) {
      await createUser(email, role);
      return res.redirect(307, "/auth/register"); // be careful with redirect don't mess up again
      // if set http code wrong, browser will cached the URL
      // even though you comment the code out it still redirects to that URL
      // make sure to use http code that has temporary redirect
    }
    return res.status(400).json({ message: "register error" });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const createUser = async (email: string, role: string) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  if (UserRole.CUSTOMER !== role && UserRole.SHOP !== role)
    throw new Error("Role does not exist");

  const sameEmailUser = await User.findOne({ email: email, role: role });
  if (sameEmailUser) throw new Error("User already exist [Email]");

  const newUser = await User.create({
    userId: nanoid(),
    email: email,
    role: role,
  });

  newUser
    .save()
    .then()
    .catch((err) => console.log(err));
};
