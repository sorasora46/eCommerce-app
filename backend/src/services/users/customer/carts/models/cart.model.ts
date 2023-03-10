import { Schema, model } from "mongoose";

export enum CartProductStatus {
  WAITING = "waiting",
  SHIPPING = "shipping",
  WAITING_TO_RECIEVE = "waiting to recieve",
}

export interface IUpdateCart {
  status?: CartProductStatus;
  productAmount?: number;
}

export interface ICart {
  userId: string;
  status: string;
  productId: string;
  productAmount: number;
}

const cartSchema = new Schema<ICart>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  status: { type: String, required: true }, // waiting for payment, shipping, waiting for recieved confirmation
  productAmount: { type: Number, required: true },
});

cartSchema.index({ userId: 1, productId: 1 }, { unique: true });

export const Cart = model("Cart", cartSchema);
