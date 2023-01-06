import { Schema, model } from "mongoose";

export interface ITransaction {
  transactionId: string;
  tFrom: string;
  tTo: string;
  tDate: Date;
  tAmount: number;
  tOnProduct: string;
  tProductAmount: number;
}

const transactionSchema = new Schema<ITransaction>({
  transactionId: { type: String, required: true },
  tFrom: { type: String, required: true },
  tTo: { type: String, required: true },
  tDate: { type: Date, required: true },
  tAmount: { type: Number, required: true },
  tOnProduct: { type: String, required: true },
  tProductAmount: { type: Number, required: true },
});

export const Transaction = model("Transaction", transactionSchema);
