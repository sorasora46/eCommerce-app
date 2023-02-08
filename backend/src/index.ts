import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import _productRoute from "./services/t_products/index.js";
import _transactionRoute from "./services/t_transactions/index.js";
import _userRoute from "./services/t_user/index.js";
import _authRoute from "./services/t_auth/index.js";

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
app.use(cookieParser("replace me with secret from dotenv"));

mongoose
  .connect("mongodb://localhost:27018/eCommerce-app-db")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err.message));

app.use("/t_product", _productRoute);
app.use("/t_transaction", _transactionRoute);
app.use("/t_user", _userRoute);
app.use("/t_auth", _authRoute);

app.listen(PORT, domain, () => console.log(`Server running at PORT:${PORT}`));
