const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/user") {
    const user = {
      name: "krishna",
      age: 19
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("Route Not Found");
  }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});