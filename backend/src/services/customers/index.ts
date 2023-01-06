import express, { Request, Response } from "express";
import { getCustomer } from "./controllers/getCustomer.js";
import { register } from "./controllers/register.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Customer route");
});

router.get("/getcustomer", getCustomer);
router.post("/register", register);

export default router;
