import { Request, Response } from "express";

export default function reportUserById(req: Request, res: Response) {
  try {
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
