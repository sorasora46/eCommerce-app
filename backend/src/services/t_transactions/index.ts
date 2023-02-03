import { Router } from "express";
import createTransactionForId from "./controllers/createTransactionForId.js";
import getTransactionsById from "./controllers/getTransactionsById.js";

const router = Router();

router.post("/create/:userId", createTransactionForId);
router.get("/:userId", getTransactionsById);

export default router;
