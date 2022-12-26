import express, { Request, Response } from "express";
import { createTransaction } from "./controllers/createTransaction.js"

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Transaction route");
});

router.post("/createtransaction", createTransaction)

export default router;
