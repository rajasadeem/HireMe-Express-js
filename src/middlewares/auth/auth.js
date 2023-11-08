const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token == null) res.status(401);
  jwt.verify(token, process.env.ACCESS_WEB_TOKEN, (error, user) => {
    if (error) res.status(401);
    req.user = user;
  });
  next();
};

module.exports = auth;
