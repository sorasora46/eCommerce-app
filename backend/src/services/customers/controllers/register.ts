import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  try {
    res.send("Hi from /customer/register");
  } catch (error: any) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};
