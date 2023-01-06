import { Request, Response } from "express";
import { Customer } from "../models/customer.model.js";
import mongoose from "mongoose";
import { User } from "../../users/models/user.model.js";
import { calculateAge } from "../../../helpers/calculateAge.js";
import { resetRegister } from "../../../helpers/resetRegister.js";

export const register = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
    const { email, name, dateOfBirth, profileImage } = req.body;
    const { userId } = await User.findOne({ email: email });

    if (name && dateOfBirth) {
      const result = await createCustomer(
        userId,
        name.fname,
        name.lname,
        dateOfBirth,
        profileImage
      );

      return res.json(result);
    }

    resetRegister(true, email);
    return res.status(400).json({ message: "register error" });
  } catch (error: any) {
    console.log(error.message);
    resetRegister(true, req.body.email);
    res.json({ message: error.message });
  }
};

export const createCustomer = async (
  userId: string,
  fname: string,
  lname: string,
  dateOfBirth: Date,
  profileImage: string
) => {
  const sameNameCustomer = await Customer.findOne({
    name: { fname: fname, lname: lname },
  });
  if (sameNameCustomer) throw new Error("Customer already exist [Name]");

  const userAge = calculateAge(dateOfBirth);
  if (userAge < 16) throw new Error("Age require atleast 16 years old");

  const newCustomer = await Customer.create({
    userId: userId,
    name: {
      fname: fname,
      lname: lname,
    },
    dateOfBirth: dateOfBirth,
    profileImage: profileImage,
  });

  newCustomer
    .save()
    .then()
    .catch((err) => console.log(err));

  return newCustomer;
};
