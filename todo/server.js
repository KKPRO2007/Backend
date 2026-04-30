const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "./pages");

const accountRoutes = require("./controllers/accountController");
const taskRoutes    = require("./controllers/taskController");

app.get("/", (req, res) => res.redirect("/login"));
app.use("/account", accountRoutes);
app.use("/tasks",   taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(3000, () => console.log("🚀 Server → http://localhost:3000"));
  })
  .catch((err) => console.error("❌ DB error:", err));
