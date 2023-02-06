import { Request, Response } from "express";
import { Customer } from "../models/customer.model.js";

export default function getCustomerById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Customer.findOne({ userId: userId }, (err: any, customer: any) => {
      if (err) return res.send(err.message);
      console.log(customer);
      res.send(customer);
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
