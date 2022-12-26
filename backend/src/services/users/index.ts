import express, { Request, Response } from "express";
import { register } from "./controllers/register.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("User route");
});

router.post("/register", register);
// TODO: create route for fetching user data

export default router;