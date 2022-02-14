const notFound = (req, res, next) => {
  res.status(404).send(`Not Found -${req.originalUrl}`);
  next();
};

module.exports = notFound;
