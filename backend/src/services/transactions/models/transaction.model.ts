import { Schema, model } from "mongoose";
import { IProduct } from "../../products/models/product.model.js";

export interface ITransaction {
  transactionId: string;
  transactionFrom: string; // userId
  transactionTo: string; // userId
  transactionDate: Date;
  transactionAmount: number; // total price
  transactionProducts: IProduct[];
}

const transactionSchema = new Schema<ITransaction>({
  transactionId: { type: String, required: true, unique: true },
  transactionFrom: { type: String, required: true },
  transactionTo: { type: String, required: true },
  transactionDate: { type: Date, required: true },
  transactionAmount: { type: Number, required: true },
  transactionProducts: { type: [Object], required: true },
});

export const Transaction = model("Transaction", transactionSchema);
