const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  if (req.method === "GET" && parsedUrl.pathname === "/user") {

    const name = query.name;
    const age = query.age;

    const user = {
      name: name,
      age: age
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(user));

  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Route Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});