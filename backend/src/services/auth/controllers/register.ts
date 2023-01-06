import { Request, Response } from "express";
import mongoose from "mongoose";
import { AuthUser } from "../../auth/models/authUser.model.js";
import * as bcrypt from "bcrypt";
import { UserRole } from "../../users/models/user.model.js";

// TODO: 1. Register AuthUser
// TODO: 2. Register the user according to the role (need redirect)
export const register = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
    const { email, password, role } = req.body;
    if (email && password) {
      // Hash the password and save to DB
      await createAuthUser(email, password, role);

      // Registation of customer
      if (role === UserRole.CUSTOMER) {
        return res.redirect(307, "/customer/register");
      }

      // Registation of shop owner
      if (role === UserRole.SHOP) {
        return res.redirect(307, "/shop/register");
      }
    }
    return res.status(400).json({ message: "register error" });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const createAuthUser = async (
  email: string,
  password: string,
  role: string
) => {

  if (UserRole.CUSTOMER !== role && UserRole.SHOP !== role)
    throw new Error("Role does not exist");

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newAuthUser = await AuthUser.create({
    email: email,
    hashedPassword: hashedPassword,
    role: role,
  });

  newAuthUser
    .save()
    .then()
    .catch((err) => console.log(err));
};
