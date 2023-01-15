import express, { Request, Response } from "express";
import { register } from "./controllers/register.js";
import { getUser } from "./controllers/getUser.js";
import { getUserWithId } from "./controllers/getUserWithId.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", (req: Request, res: Response) => {
  res.send("User route");
});

router.post("/register", upload.single("profileImage"), register);
router.get("/getuser/:userId", getUserWithId);
router.get("/getuser/", getUser);

export default router;
