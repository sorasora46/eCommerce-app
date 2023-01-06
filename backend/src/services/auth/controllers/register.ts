import { Request, Response } from "express";
import mongoose from "mongoose";
import { IAuthUser, AuthUser } from "../../auth/models/authUser.model.js";
import * as bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  res.send("Hi");
  // try {
  //   const { email, role } = req.body;
  //   if (email && role) {
  //     const result = await createUser(email, role);
  //     return res.json(result);
  //   }
  //   return res.status(400).json({ message: "register error" });
  // } catch (error: any) {
  //   console.log(error);
  //   res.status(400).json({ message: error.message });
  // }
};

// export const createUser = async (email: string, role: string) => {
//   await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

// const salt = await bcrypt.genSalt();
// const hashedPassword = await bcrypt.hash(user_password, salt);

// const newAuthUser = await AuthUser.create({
//   email: email,
//   hashedPassword: hashedPassword,
// });

// newAuthUser
//   .save()
//   .then()
//   .catch((err) => console.log(err));
// };
