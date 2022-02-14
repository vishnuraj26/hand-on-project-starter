const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

//Importing Router
const authRouter = require("../src/routes/auth");
const myAccount = require("../src/routes/loggedIn");
const bgremover = require("../src/routes/bgRemove");

const bodyParser = require("body-parser");

const app = express();

//Connecting DB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//Route Middleware
app.use(authRouter);
app.use(myAccount);
app.use(bgremover);

app.listen(process.env.PORT, () => {
  console.log("backend server runs at " + process.env.PORT);
});
