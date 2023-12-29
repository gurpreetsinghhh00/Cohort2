const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const jwtToken = token.split(" ")[1];
  try {
    const decodedToken = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedToken.username) {
      req.username = decodedToken.username;
      next();
    } else {
      res.status(403).json({
        message: "Not a authorized user",
      });
    }
  } catch (e) {
    res.json({
      message: "Invalid inputs",
    });
  }
}

module.exports = adminMiddleware;
