const jwt = require("jsonwebtoken");

module.exports = function requireAuth(req, res, next) {
  const token = req.cookies?.session_token;

  if (!token) {
    return res.redirect("/account/login");
  }

  try {
    const payload   = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;         
    next();
  } catch (_err) {
    res.clearCookie("session_token");
    return res.redirect("/account/login");
  }
};
