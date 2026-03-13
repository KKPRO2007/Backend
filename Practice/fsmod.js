const fs = require("fs");
fs.writeFileSync("Enzo", "w+","hi kk pro");
fs.appendFileSync("Enzo", "\n\n kk is professional")
const data = fs.readFileSync("Enzo","utf-8");
console.log(data);

fs.copyFileSync("Enzo", "cop");
fs.renameSync("cop", "Enzoo");
fs.unlinkSync("Enzo");

