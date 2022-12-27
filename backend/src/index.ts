import express, { Express } from "express";
import mongoose from "mongoose";
import authenticationRoute from "./services/auth/index.js";
import cartRoute from "./services/carts/index.js";
import productRoute from "./services/products/index.js";
import shopRoute from "./services/shops/index.js";
import transactionRoute from "./services/transactions/index.js";
import userRoute from "./services/users/index.js";

const app: Express = express();
const PORT = 8000;

mongoose.set("strictQuery", false);

app.use(express.json());

app.use("/login", authenticationRoute);
app.use("/cart", cartRoute);
app.use("/product", productRoute);
app.use("/shop", shopRoute);
app.use("/transaction", transactionRoute);
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server running at PORT:${PORT}`));
