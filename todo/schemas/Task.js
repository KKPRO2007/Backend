const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    label:     { type: String, required: true, trim: true },
    isDone:    { type: Boolean, default: false },
    priority:  { type: String, enum: ["low", "medium", "high"], default: "medium" },
    owner:     { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
