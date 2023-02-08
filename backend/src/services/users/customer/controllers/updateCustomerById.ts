import { Request, Response } from "express";
import { User } from "../../models/user.model.js";
import { Customer, IUpdateCustomer } from "../models/customer.model.js";

export default function updateCustomerById(req: Request, res: Response) {
  try {
    const { email, fname, lname, dateOfBirth } = req.body;
    const profileImage = req.file?.buffer;
    const { userId } = req.params;

    const updatedData: IUpdateCustomer = {};
    if (email) {
      updatedData.email = email;

      User.findOneAndUpdate(
        { userId: userId },
        updatedData,
        { new: true },
        async (err: any, userResult: any) => {
          if (err) return res.send(err.message);

          const customerResultEmail = await Customer.findOneAndUpdate(
            { userId: userId },
            updatedData,
            { new: true }
          );

          if (fname || lname || dateOfBirth || profileImage) {
            if (fname) updatedData.fname = fname;
            if (lname) updatedData.lname = lname;
            if (dateOfBirth) updatedData.dateOfBirth = dateOfBirth;
            if (profileImage) updatedData.profileImage = profileImage;

            Customer.findOneAndUpdate(
              { userId: userId },
              updatedData,
              { new: true },
              (err: any, customerResult: any) => {
                if (err) return res.send(err.message);
                res.send({ user: userResult, customer: customerResult });
              }
            );
            return;
          }

          res.send({ user: userResult, customer: customerResultEmail });
        }
      );
    } else {
      if (fname) updatedData.fname = fname;
      if (lname) updatedData.lname = lname;
      if (dateOfBirth) updatedData.dateOfBirth = dateOfBirth;
      if (profileImage) updatedData.profileImage = profileImage;

      Customer.findOneAndUpdate(
        { userId: userId },
        updatedData,
        { new: true },
        (err: any, result: any) => {
          if (err) return res.send(err.message);
          res.send(result);
        }
      );
    }
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
