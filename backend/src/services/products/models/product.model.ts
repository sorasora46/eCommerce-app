import { Schema, model } from "mongoose";

export interface IProduct {
  productId: string;
  pName: string;
  pPrice: number;
  pImages: string[]; // images of product
  pOwnerId: string; // userId
  pAmount: number; // the number of product in the stock
  pClickAmount: number;
}

const productSchema = new Schema<IProduct>({
  productId: { type: String, required: true, unique: true },
  pName: { type: String, required: true },
  pPrice: { type: Number, required: true },
  pImages: { type: [String], required: true },
  pOwnerId: { type: String, required: true },
  pAmount: { type: Number, required: true },
  pClickAmount: { type: Number, required: true },
});

export const Product = model("Product", productSchema);
