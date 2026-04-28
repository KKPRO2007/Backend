const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/sum", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ ans: a + b });
});

app.listen(3000);