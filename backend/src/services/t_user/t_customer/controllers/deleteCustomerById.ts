import { Request, Response } from "express";
import { Customer } from "../models/customer.model.js";

export default function deleteCustomerById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Customer.findOneAndDelete({ userId: userId }, (err: any, result: any) => {
      if (err) return res.send(err.message);
      res.send(result);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
