const router  = require("express").Router();
const bcrypt  = require("bcryptjs");
const jwt     = require("jsonwebtoken");
const Member  = require("../schemas/Member");

router.get("/register", (req, res) => {
  res.render("register", { error: null });
});

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await Member.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.render("register", { error: "Email already registered." });
    }

    const hashed = await bcrypt.hash(password, 12);
    await Member.create({ email, password: hashed });

    res.redirect("/account/login?registered=1");
  } catch (err) {
    res.render("register", { error: "Something went wrong. Try again." });
  }
});

router.get("/login", (req, res) => {
  const justRegistered = req.query.registered === "1";
  res.render("login", { error: null, justRegistered });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const member = await Member.findOne({ email: email.toLowerCase() });
    if (!member) {
      return res.render("login", { error: "No account found with that email.", justRegistered: false });
    }

    const valid = await bcrypt.compare(password, member.password);
    if (!valid) {
      return res.render("login", { error: "Incorrect password.", justRegistered: false });
    }

    const token = jwt.sign(
      { memberId: member._id, email: member.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("session_token", token, {
      httpOnly: true,
      maxAge:   7 * 24 * 60 * 60 * 1000,  
    });

    res.redirect("/tasks");
  } catch (err) {
    res.render("login", { error: "Login failed. Try again.", justRegistered: false });
  }
});


router.get("/logout", (req, res) => {
  res.clearCookie("session_token");
  res.redirect("/account/login");
});

module.exports = router;
