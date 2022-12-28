import { Request, Response } from "express";
import { User } from "../user.model.js";
import { nanoid } from "nanoid";
import mongoose, { StringSchemaDefinition } from "mongoose";
import { authUser } from "../../auth/authUser.model.js";
import * as bcrypt from "bcrypt";

export const createUser = async (
  user_email: string,
  user_fname: string,
  user_lname: string,
  user_dateOfBirth: Date,
  user_password: string,
  user_profileImage: string
) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const sameEmailUser = await User.findOne({ email: user_email });
  const sameNameUser = await User.findOne({
    fname: user_fname,
    lname: user_lname,
  });

  if (sameEmailUser) throw new Error("User already exist [Email]");
  if (sameNameUser) throw new Error("User already exist [Name]");
  if (new Date().getFullYear() - new Date(user_dateOfBirth).getFullYear() < 16)
    throw new Error("Age require atleast 16 years old");

  const newUser = await User.create({
    userId: nanoid(),
    fname: user_fname,
    lname: user_lname,
    email: user_email,
    dateOfBirth: new Date(user_dateOfBirth),
    profileImage: user_profileImage,
  });

  newUser
    .save()
    .then()
    .catch((err) => console.log(err));

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(user_password, salt);

  const newAuthUser = await authUser.create({
    email: user_email,
    hashedPassword: hashedPassword,
  });

  newAuthUser
    .save()
    .then()
    .catch((err) => console.log(err));

  return newUser;
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, fname, lname, dateOfBirth, profileImage, password } =
      req.body;
    if (email && fname && lname && dateOfBirth && password) {
      const result = await createUser(
        email,
        fname,
        lname,
        dateOfBirth,
        password,
        profileImage
      );
      return res.json(result);
    }
    return res.status(400).json({ message: "register error" });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.toString() });
  }
};
