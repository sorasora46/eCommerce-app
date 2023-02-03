import { Request, Response } from "express";
import { Transaction } from "../models/transaction.model.js";

export default function getTransactionById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    Transaction.find(
      { transactionFrom: userId },
      (err: any, transactions: any) => {
        if (err) return res.send(err.message);
        res.send(transactions);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
