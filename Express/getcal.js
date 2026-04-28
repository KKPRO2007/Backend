const express = require("express");
const app = express();

app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ ans: a + b });
});

app.get("/multiply", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ ans: a * b });
});

app.get("/divide", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
        return res.json({ error: "Cannot divide by zero" });
    }

    res.json({ ans: a / b });
});

app.get("/subtract", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ ans: a - b });
});

app.listen(3000, () => console.log("Server running"));