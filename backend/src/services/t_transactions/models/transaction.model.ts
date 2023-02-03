import { Schema, model } from "mongoose";

export interface ITransactionProduct {
  productId: string;
  productName: string;
  productOwner: string;
  productPrice: number;
  productAmount: number;
}

export interface ITransaction {
  transactionId: string;
  transactionFrom: string; // userId
  transactionTo: string; // userId
  transactionDate: Date;
  transactionAmount: number; // total price
  transactionProducts: ITransactionProduct[];
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
