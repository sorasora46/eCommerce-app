import { Schema, model } from "mongoose";

interface Transaction {
  transactionId: string;
  tFrom: string;
  tTo: string;
  tDate: Date;
  tAmount: number;
  tOnProduct: string;
  tProductAmount: number;
}

const transactionSchema = new Schema<Transaction>({
  transactionId: { type: String, required: true },
  tFrom: { type: String, required: true },
  tTo: { type: String, required: true },
  tDate: { type: Date, required: true },
  tAmount: { type: Number, required: true },
  tOnProduct: { type: String, required: true },
  tProductAmount: { type: Number, required: true },
});

export const Transaction = model("Transaction", transactionSchema);