const router = require("express").Router();
const verify = require("../middlewares/verifyToken");

router.get("/dashboard", verify, (req, res) => {
  res.json(req.verified);
});

module.exports = router;
