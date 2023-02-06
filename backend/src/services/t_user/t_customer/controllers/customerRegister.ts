import { Request, Response } from "express";
import { calculateAge } from "../../../../helpers/calculateAge.js";
import { Customer } from "../models/customer.model.js";

export default function customerRegister(req: Request, res: Response) {
  try {
    const { userId, email, fname, lname, dateOfBirth } = req.body;
    const profileImage = req.file.buffer;

    const customerAge = calculateAge(new Date(dateOfBirth));
    if (customerAge < 16) throw new Error("age require atleast 16 years old");

    Customer.create(
      {
        userId,
        email,
        fname,
        lname,
        dateOfBirth,
        profileImage,
      },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        console.log(result);
        res.send(result);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
