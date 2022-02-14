const jwt = require("jsonwebtoken");

// eslint-disable-next-line no-unused-vars
module.exports = function (req, res, next) {
  //middleware function which cannot be accsessed without jwt token
  const token = req.cookies["token"];
  if (!token) return res.status(401).json({ error: "Access denised" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET); //returns the _id
    if (verified) {
      req.verified = verified;
      return next();
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
