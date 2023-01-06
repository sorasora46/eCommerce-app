import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Customer route");
});

router.get("/getcustomer");
router.post("register");

export default router;
