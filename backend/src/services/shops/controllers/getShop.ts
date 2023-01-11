import { Request, Response } from "express";
import mongoose from "mongoose";
import { Shop } from "../models/shop.model.js";

export const getShop = async (req: Request, res: Response) => {
  try {

    const { userId } = req.body;


  } catch (error: any) {
    console.log(error);
    res.json({ error: error.message });
  }
};
