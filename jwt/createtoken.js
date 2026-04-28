const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: 1 },        // payload
  "secret123",          // secret key
  { expiresIn: "1h" }   // optional
);

console.log(token);