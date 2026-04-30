const router      = require("express").Router();
const Task        = require("../schemas/Task");
const requireAuth = require("../guards/requireAuth");

router.use(requireAuth);


router.get("/", async (req, res) => {
  try {
    const filter   = req.query.filter || "all";   
    const query    = { owner: req.currentUser.memberId };

    if (filter === "active") query.isDone = false;
    if (filter === "done")   query.isDone = true;

    const tasks    = await Task.find(query).sort({ createdAt: -1 });
    const allCount = await Task.countDocuments({ owner: req.currentUser.memberId });
    const doneCount= await Task.countDocuments({ owner: req.currentUser.memberId, isDone: true });

    res.render("dashboard", {
      tasks,
      filter,
      email:     req.currentUser.email,
      allCount,
      doneCount,
      todoCount: allCount - doneCount,
    });
  } catch (err) {
    res.status(500).send("Error loading tasks");
  }
});

router.post("/new", async (req, res) => {
  const { label, priority } = req.body;
  if (label?.trim()) {
    await Task.create({
      label:    label.trim(),
      priority: priority || "medium",
      owner:    req.currentUser.memberId,
    });
  }
  res.redirect("/tasks");
});

router.post("/toggle/:id", async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, owner: req.currentUser.memberId });
  if (task) {
    task.isDone = !task.isDone;
    await task.save();
  }
  res.redirect("/tasks" + (req.query.filter ? `?filter=${req.query.filter}` : ""));
});

router.post("/remove/:id", async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, owner: req.currentUser.memberId });
  res.redirect("/tasks" + (req.query.filter ? `?filter=${req.query.filter}` : ""));
});

module.exports = router;
