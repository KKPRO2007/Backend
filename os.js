const path = require("path");
const os = require("os");


// ===== PATH MODULE =====
console.log("---- PATH MODULE ----");

const joinedPath = path.join("users", "kk", "docs", "file.txt");
console.log("Joined Path:", joinedPath);

const absolutePath = path.resolve("data", "info.txt");
console.log("Absolute Path:", absolutePath);

console.log("Base Name:", path.basename("/users/kk/docs/file.txt"));
console.log("Directory Name:", path.dirname("/users/kk/docs/file.txt"));
console.log("Extension:", path.extname("report.pdf"));

const parsed = path.parse("/users/kk/docs/file.txt");
console.log("Parsed Object:", parsed);

const formatted = path.format({
  dir: "/users/kk/docs",
  base: "file.txt"
});
console.log("Formatted Path:", formatted);

console.log("__dirname:", __dirname);
console.log("__filename:", __filename);


// ===== OS MODULE =====
console.log("\n---- OS MODULE ----");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log("CPU Info:", os.cpus().length, "cores");

const totalMem = os.totalmem() / 1024 / 1024 / 1024;
console.log("Total RAM:", totalMem.toFixed(2), "GB");

const freeMem = os.freemem() / 1024 / 1024 / 1024;
console.log("Free RAM:", freeMem.toFixed(2), "GB");

console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());

console.log("User Info:", os.userInfo());

console.log("System Uptime:", os.uptime(), "seconds");

console.log("Network Interfaces:", os.networkInterfaces());
