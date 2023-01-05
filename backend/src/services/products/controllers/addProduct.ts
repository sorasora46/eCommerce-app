import { Request, Response } from "express";
import { Product } from "../models/product.model.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";

export const createProduct = async (
  pName: string,
  pPrice: number,
  pImages: string[],
  pOwner: string
) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const sameOwnerAndName = await Product.findOne({
    pOwnerId: pOwner,
    pName: pName,
  });
  if (sameOwnerAndName) throw new Error("Product already exist [Name, Owner]");

  if (pImages.length === 0)
    throw new Error("Product must include atleast 1 picture");

  const newProduct = await Product.create({
    productId: nanoid(),
    pImage: pImages,
    pName: pName,
    pOwnerId: pOwner,
    pPrice: pPrice,
  });

  newProduct
    .save()
    .then()
    .catch((err) => console.log(err));

  return newProduct;
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const { pOwner, pPrice, pName, pImages } = req.body;
    const result = await createProduct(pName, pPrice, pImages, pOwner);
    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
