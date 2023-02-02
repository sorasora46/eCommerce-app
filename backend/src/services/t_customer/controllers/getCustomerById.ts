import { Request, Response } from "express";

export default function getCustomerById(req: Request, res: Response) {
  res.send("hi");
}
