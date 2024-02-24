import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect(
  "mongodb+srv://zalatdodo:0123162554@integrated-solutions.oxsqxx0.mongodb.net/?retryWrites=true&w=majority&appName=integrated-Solutions"
);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
