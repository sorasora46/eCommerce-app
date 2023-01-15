import { Schema, model } from "mongoose";

export interface ICart {
  userId: string;
  productId: string;
  status: string;
  productAmount: number;
  pName: string;
  pPrice: number;
  pImage: string;
  shopName: string;
  shopId: string;
}

const cartSchema = new Schema<ICart>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  status: { type: String, required: true }, // waiting for payment, shipping, waiting for recieved confirmation
  productAmount: { type: Number, required: true },
  pName: { type: String, required: true },
  pPrice: { type: Number, required: true },
  shopName: { type: String, required: true },
  shopId: { type: String, required: true },
  pImage: { type: String, required: true },
});

export const Cart = model("Cart", cartSchema);
