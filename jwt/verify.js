const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/protected", (req, res) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, "secret123");
        res.json({ message: "Access granted", user: decoded });
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
});

app.listen(3000);