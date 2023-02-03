import { Schema, model } from "mongoose";

export enum CartProductStatus {
  "waiting",
  "shipping",
  "waiting to recieve",
}

export interface IUpdateCart {
  status?: CartProductStatus;
  productAmount?: number;
}

export interface ICart {
  userId: string;
  status: string;
  shopName: string;
  shopId: string;
  productId: string;
  productAmount: number;
  productName: string;
  productPrice: number;
  productImage: Buffer;
}

const cartSchema = new Schema<ICart>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  status: { type: String, required: true }, // waiting for payment, shipping, waiting for recieved confirmation
  productAmount: { type: Number, required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  shopName: { type: String, required: true },
  shopId: { type: String, required: true },
  productImage: { type: Buffer, required: true },
});

export const Cart = model("Cart", cartSchema);
