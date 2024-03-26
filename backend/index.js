import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
// import productRouter from "./routes/product.js";
import categoriesRouter from "./routes/categories.js";
import brandsRouter from "./routes/brands.js";
import productsRouter from "./routes/product.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
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
mongoose
  .connect(process.env.MONGO)
  .then((result) => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
app.use("/user", userRouter);
// app.use("/product", productRouter);
app.use("/category", categoriesRouter);
app.use("/brand", brandsRouter);
app.use("/products", productsRouter);

//error handling middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
