import { Request, Response } from "express";
import { Auth } from "../../../auths/models/auth.model.js";
import { User } from "../../models/user.model.js";
import { Customer } from "../models/customer.model.js";

export default function deleteCustomerById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    User.findOneAndDelete(
      { userId: userId },
      async (err: any, userResult: any) => {
        try {
          if (err) throw err;

          const customerResult = await Customer.findOneAndDelete({
            userId: userId,
          });

          await Auth.findOneAndDelete({
            userId: userId,
          });

          res.send({
            user: userResult,
            customer: customerResult,
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
