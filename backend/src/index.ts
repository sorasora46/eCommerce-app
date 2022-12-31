import express, { Express } from "express";
import mongoose from "mongoose";
import authenticationRoute from "./services/auth/index.js";
import cartRoute from "./services/carts/index.js";
import productRoute from "./services/products/index.js";
import shopRoute from "./services/shops/index.js";
import transactionRoute from "./services/transactions/index.js";
import userRoute from "./services/users/index.js";
import { IUser } from "./services/users/user.model.js";
import cors from "cors";

const app: Express = express();
const PORT = 8000;

mongoose.set("strictQuery", false);

app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
  })
);

declare global {
  namespace Express {
    export interface Request {
      user?: IUser;
    }
  }
}

app.use("/auth", authenticationRoute);
app.use("/cart", cartRoute);
app.use("/product", productRoute);
app.use("/shop", shopRoute);
app.use("/transaction", transactionRoute);
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server running at PORT:${PORT}`));
