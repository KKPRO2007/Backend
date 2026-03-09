const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const ps = url.parse(req.url, true);
    const q = ps.query;

    if (req.method === "GET" && ps.pathname === "/profile") {

        const name = q.name;
        const age = q.age;

        const user = {
            name: name,
            age: age
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("route is not found");
    }
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});