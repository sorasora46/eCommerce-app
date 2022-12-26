import express, { Express } from "express";
import authenticationRoute from "./routers/auth/index"

const app: Express = express();
const PORT = 8000;

app.use("/login", authenticationRoute)

app.listen(PORT, console.log(`Server running at PORT:${PORT}`))