import express, { Express } from "express";
import authenticationRoute from "./services/auth/index";
import cartRoute from "./services/carts/index";
import productRoute from "./services/products/index";
import shopRoute from "./services/shops/index";
import transactionRoute from "./services/transactions/index";
import userRoute from "./services/users/"

const app: Express = express();
const PORT = 8000;

app.use("/login", authenticationRoute);
app.use("/cart", cartRoute);
app.use("/product", productRoute);
app.use("/shop", shopRoute);
app.use("/transaction", transactionRoute);
app.use("/user", userRoute);

app.listen(PORT, console.log(`Server running at PORT:${PORT}`));
