import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { IProduct } from "../../products/models/product.model.js";
import { Transaction } from "../models/transaction.model.js";

export default function createTransactionForId(req: Request, res: Response) {
  try {
    const { transactionTo, transactionDate, transactionProducts } = req.body;
    const { userId } = req.params; // userId who make the transaction

    // calculate the total amount
    const transactionAmount = transactionProducts.reduce(
      (total: number, product: IProduct) =>
        total + product.productPrice * product.productAmount,
      0
    );

    Transaction.create(
      {
        transactionId: nanoid(),
        transactionFrom: userId,
        transactionTo,
        transactionDate,
        transactionAmount,
        transactionProducts,
      },
      (err: any, result: any) => {
        try {
          if (err) throw err;
          console.log(result);
          res.send(result);
        } catch (err: any) {
          console.log(err.message);
          return res.send(err.message);
        }
      }
    );
  } catch (err: any) {
    console.log(err.message);
    res.send(err.message);
  }
}
