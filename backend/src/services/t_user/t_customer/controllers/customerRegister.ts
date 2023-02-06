import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { calculateAge } from "../../../../helpers/calculateAge.js";
import { Role, User } from "../../models/user.model.js";
import { Customer } from "../models/customer.model.js";

export default function customerRegister(req: Request, res: Response) {
  try {
    const { email, fname, lname, dateOfBirth } = req.body;
    const profileImage = req.file.buffer;

    const customerAge = calculateAge(new Date(dateOfBirth));
    if (customerAge < 16) throw new Error("age require atleast 16 years old");

    User.create(
      {
        userId: nanoid(),
        email,
        role: Role.CUSTOMER,
      },
      async (err: any, user: any) => {
        if (err) return res.send(err.message);

        await Customer.create({
          userId: user.userId,
          email,
          fname,
          lname,
          dateOfBirth,
          profileImage,
        });

        res.send({
          userId: user.userId,
          role: user.role,
          email,
          fname,
          lname,
          dateOfBirth,
          profileImage,
        });
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
