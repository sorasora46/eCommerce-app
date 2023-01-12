import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

export const getSearchProduct = async (req: Request, res: Response) => {
  try {
    const search = req.query;
    const searchPattern = new RegExp(`${search.text}`, "i");

    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");
    const products = await Product.find({ pName: searchPattern });

    res.send(products);
  } catch (error: any) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};
