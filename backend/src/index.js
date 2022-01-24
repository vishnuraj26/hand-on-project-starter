const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });

app.get("/hello", (req, res) => {
  res.send();
});

app.listen(process.env.PORT, () => {
  console.log("backend server runs at " + process.env.PORT);
});
