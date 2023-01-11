import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  try {

  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
