import { Request, Response } from "express";

export const getSearchProduct = (req: Request, res: Response) => {
  res.send(req.query)
}