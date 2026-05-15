const fs = require("fs");

// Write (creates or overwrites)
fs.writeFileSync("file.txt", "content");

// Read
const data = fs.readFileSync("file.txt", "utf-8");

// Append
fs.appendFileSync("file.txt", "\nnew line");

// Copy
fs.copyFileSync("file.txt", "copy.txt");

// Rename / Move
fs.renameSync("copy.txt", "renamed.txt");

// Delete
fs.unlinkSync("renamed.txt");