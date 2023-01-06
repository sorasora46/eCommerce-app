import express, { Request, Response } from "express";
import { getCustomer } from "./controllers/getCustomer.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Customer route");
});

router.post("register");
router.get("/getcustomer", getCustomer);

export default router;
