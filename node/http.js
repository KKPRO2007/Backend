const http = require("http");

// Basic server
const server = http.createServer((req, res) => {
    // req = incoming request
    // res = what you send back

    res.writeHead(200, { "Content-Type": "text/plain" });
    // Common types: "text/html", "application/json"

    res.end("Hello World!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});