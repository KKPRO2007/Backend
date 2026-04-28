const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // Read HTML file
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading file");
            return;
        }

        // Set header and send HTML
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

// Run server on port 5000
server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});