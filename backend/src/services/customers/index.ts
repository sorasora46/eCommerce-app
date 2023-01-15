import express, { Request, Response } from "express";
import multer from "multer";
import { getCustomer } from "./controllers/getCustomer.js";
import { register } from "./controllers/register.js";

const router = express.Router();
const upload = multer();

router.get("/", (req: Request, res: Response) => {
  res.send("Customer route");
});

router.post("/register", upload.single("profileImage"), register);
router.get("/getcustomer/:userId", getCustomer);

export default router;
