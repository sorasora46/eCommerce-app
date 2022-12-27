import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("login route");
});

export default router;
