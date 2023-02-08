import { Request, Response } from "express";

export default function handleLogout(req: Request, res: Response) {
  try {
    res.cookie("access_token", "", { maxAge: 0 }).send("logout success");
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
