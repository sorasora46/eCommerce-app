import { Schema, model } from "mongoose";

interface Product {
  productId: string;
  pName: string;
  pPrice: number;
  pImages: string[];
  pOwnerId: string;
}

const productSchema = new Schema<Product>({
  productId: { type: String, required: true },
  pName: { type: String, required: true },
  pPrice: { type: Number, required: true },
  pImage: { type: Array<String>, required: true },
  pOwnerId: { type: String, required: true },
});

export const Product = model("Product", productSchema)