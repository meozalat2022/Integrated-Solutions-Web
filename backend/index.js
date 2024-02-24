import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then((result) => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
