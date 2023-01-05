import { Schema, model } from "mongoose";

interface Cart {
  userId: string;
  productId: string;
  status: string;
  productAmount: number;
}

const cartSchema = new Schema<Cart>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  status: { type: String, required: true },
  productAmount: { type: Number, required: true },
});

export const Cart = model("Cart", cartSchema);
