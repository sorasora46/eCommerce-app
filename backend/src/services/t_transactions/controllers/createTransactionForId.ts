import { Request, Response } from "express";
import {
  ITransactionProduct,
  Transaction,
} from "../models/transaction.model.js";

export default function createTransactionForId(req: Request, res: Response) {
  try {
    const {
      transactionId,
      transactionTo,
      transactionDate,
      transactionProducts,
    } = req.body;
    const { userId } = req.params; // userId who make the transaction

    // calculate the total amount
    const transactionAmount = transactionProducts.reduce(
      (total: number, product: ITransactionProduct) =>
        total + product.productPrice * product.productAmount,
      0
    );

    Transaction.create(
      {
        transactionId: transactionId,
        transactionFrom: userId,
        transactionTo: transactionTo,
        transactionDate: new Date(transactionDate),
        transactionAmount: transactionAmount,
        transactionProducts: transactionProducts,
      },
      (err: any, result: any) => {
        if (err) return res.send(err.message);
        console.log(result);
        res.send(result);
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
