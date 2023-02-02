import { Request, Response } from "express";
import { Customer } from "../models/customer.model.js";

export default function customerRegister(req: Request, res: Response) {
  try {
    const { userId, email, name, dateOfBirth } = req.body;
    const { fname, lname } = JSON.parse(name);
    const imageBuffer = req.file.buffer
    Customer.create({
      userId: userId,
      email: email,
      name: {
        fname: fname,
        lname: lname,
      },
      dateOfBirth: new Date(dateOfBirth),
      profileImage: imageBuffer
    }, (err: any, result: any) => {
      if (err) throw err;
      console.log(result);
      res.send(result)
    })
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
