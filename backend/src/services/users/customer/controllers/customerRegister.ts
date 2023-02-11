import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { calculateAge } from "../../../../helpers/calculateAge.js";
import { Auth } from "../../../auths/models/auth.model.js";
import { Role, User } from "../../models/user.model.js";
import { Customer } from "../models/customer.model.js";
import * as bcrypt from "bcrypt";

export default function customerRegister(req: Request, res: Response) {
  try {
    const { email, fname, lname, dateOfBirth, password } = req.body;
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
        try {
          if (err) throw err;

          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(password, salt);

          await Auth.create({
            userId: user.userId,
            hashedPassword,
          });

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
        } catch (err: any) {
          console.log(err.message);
          return res.send(err.message);
        }
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
