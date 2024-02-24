import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.js";
// import productRouter from "./routes/product.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
dotenv.config();

// app.get("/", (req, res) => {
//   res.send("server is running");
// });
// app.post("/signup", (req, res) => {
//   console.log(req.body);
// });
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/user", userRouter);
// app.use("/product", productRouter);
mongoose
  .connect(process.env.MONGO)
  .then((result) => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
