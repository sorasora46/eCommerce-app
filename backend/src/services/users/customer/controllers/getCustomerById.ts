import { Request, Response } from "express";
import { User } from "../../models/user.model.js";
import { Customer } from "../models/customer.model.js";

export default function getCustomerById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    User.findOne({ userId: userId }, async (err: any, user: any) => {
      if (err) return res.send(err.message);

      const customer = await Customer.findOne({ userId: userId });

      res.send({
        userId: user.userId,
        email: user.email,
        role: user.role,
        fname: customer.fname,
        lname: customer.lname,
        dateOfBirth: customer.dateOfBirth,
        profileImage: customer.profileImage,
      });
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
