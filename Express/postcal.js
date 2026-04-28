const express = require("express");
const app = express();

app.use(express.json()); // MUST

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.json({ ans: a + b });
});

app.post("/multiply", (req, res) => {
    const { a, b } = req.body;
    res.json({ ans: a * b });
});

app.post("/divide", (req, res) => {
    const { a, b } = req.body;

    if (b === 0) {
        return res.json({ error: "Cannot divide by zero" });
    }

    res.json({ ans: a / b });
});

app.post("/subtract", (req, res) => {
    const { a, b } = req.body;
    res.json({ ans: a - b });
});

app.listen(3000, () => console.log("Server running"));