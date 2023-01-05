import { Request, Response } from "express";
import { Transaction } from "../models/transaction.model.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";

export const addTransaction = async (
  tFrom: string,
  tTo: string,
  tAmount: number,
  tOnProduct: string,
  tProductAmount: number
) => {
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  const newTransaction = await Transaction.create({
    tAmount: tAmount,
    tDate: new Date(),
    tFrom: tFrom,
    tTo: tTo,
    tOnProduct: tOnProduct,
    tProductAmount: tProductAmount,
    transactionId: nanoid(),
  });

  newTransaction
    .save()
    .then()
    .catch((err) => console.log(err));

  return newTransaction;
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { tFrom, tTo, tAmount, tOnProduct, tProductAmount } = req.body;
    const result = await addTransaction(
      tFrom,
      tTo,
      tAmount,
      tOnProduct,
      tProductAmount
    );
    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.messsage });
  }
};
