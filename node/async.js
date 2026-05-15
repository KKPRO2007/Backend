const fs = require("fs");

// Write
fs.writeFile("file.txt", "content", "utf-8", (err) => {
    if (err) throw err;
    console.log("Written!");
});

// Read
fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);        // data is already a string with "utf-8"
    // console.log(data.toString()) — only needed without encoding
});

// Append
fs.appendFile("file.txt", "\nnew line", (err) => {
    if (err) throw err;
});

// Rename
fs.rename("file.txt", "new.txt", (err) => {
    if (err) throw err;
});

// Copy
fs.copyFile("new.txt", "backup.txt", (err) => {
    if (err) throw err;
});

// Delete
fs.unlink("backup.txt", (err) => {
    if (err) throw err;
});

// File Stats
fs.stat("file.txt", (err, stats) => {
    if (err) throw err;
    console.log(stats.isFile());     // true/false
    console.log(stats.isDirectory()); // true/false
    console.log(stats.size);         // size in bytes
});

// Make Directory
fs.mkdir("myFolder", (err) => {
    if (err) throw err;
});

// Read Directory
fs.readdir("myFolder", (err, files) => {
    if (err) throw err;
    console.log(files); // array of filenames
});