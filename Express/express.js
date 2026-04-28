const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});