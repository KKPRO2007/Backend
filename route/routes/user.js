const express = require("express");
const router = express.Router();

// Middleware
router.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});

// Route
router.get("/profile", (req, res) => {
    res.send("User Profile");
});

module.exports = router; // IMPORTANT