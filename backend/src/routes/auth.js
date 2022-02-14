const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const {
  registerVlidation,
  loginVlidation,
} = require("../middlewares/valiadtion");

//register route
router.post("/register", async (req, res) => {
  //validate before craeting user
  const { error } = registerVlidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the user already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //crating new User instance
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    await user.save(); //saves the user to the db
    res.status(201).json({ _id: user._id });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Login route
router.post("/login", async (req, res) => {
  //validate before logging in
  const { error } = loginVlidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //checking if the email already in the database
  const userInDB = await User.findOne({ email: req.body.email }); //gives the object with matching email
  if (!userInDB) return res.status(400).send({ message: "Email wrong" }); //Invalid Email or Password
  //Password match
  const validPass = await bcrypt.compare(req.body.password, userInDB.password); //returns bool
  if (!validPass) return res.status(400).send({ message: "password wrong" });

  if (userInDB.email && validPass) {
    //creating and assigning jwt token
    const Token = jwt.sign({ _id: userInDB._id }, process.env.TOKEN_SECRET);
    res
      .cookie("token", Token, {
        httpOnly: true,
      })
      .send({ token: Token });
  }
});

module.exports = router;
