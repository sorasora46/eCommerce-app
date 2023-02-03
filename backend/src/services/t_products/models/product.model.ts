import { Schema, model } from "mongoose";

export interface IProduct {
  productId: string;
  productName: string;
  productPrice: number;
  productOwner: string; // userId
  productAmount: number; // the number of product in the stock
  productImage: Buffer;
}

const productSchema = new Schema<IProduct>({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true, unique: true },
  productPrice: { type: Number, required: true },
  productOwner: { type: String, required: true },
  productAmount: { type: Number, required: true },
  productImage: { type: Buffer, required: true },
});

export const Product = model("Product", productSchema);
