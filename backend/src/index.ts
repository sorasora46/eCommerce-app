import express, { Express } from "express";
import mongoose from "mongoose";
import authenticationRoute from "./services/auth/index.js";
import cartRoute from "./services/carts/index.js";
import productRoute from "./services/products/index.js";
import shopRoute from "./services/shops/index.js";
import transactionRoute from "./services/transactions/index.js";
import userRoute from "./services/users/index.js";
import customerRoute from "./services/customers/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import _customerRoute from "./services/t_customer/index.js";
import _shopRoute from "./services/t_shop/index.js";

const app: Express = express();
const PORT = 8000;
const domain = "127.0.0.1"; // specify node server to set cookie at this domain
/** to set cookie
 * 1. use cors
 * 2. set credential to true both frontend and backend (in cors config)
 * 3. set domain in app.listen or add domain in cookie option ({ domain: domain })
 * 4. set httpOnly (optional)
 *
 * to retrieve cookies from client
 * 1. install cookieParser
 */

mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
app.use(cookieParser("very secret cookie_secret string"));

app.use("/auth", authenticationRoute);
app.use("/cart", cartRoute);
app.use("/product", productRoute);
app.use("/shop", shopRoute);
app.use("/transaction", transactionRoute);
app.use("/user", userRoute);
app.use("/customer", customerRoute);

app.use("/t_customer", _customerRoute);
app.use("/t_shop", _shopRoute);

app.listen(PORT, domain, () => console.log(`Server running at PORT:${PORT}`));
