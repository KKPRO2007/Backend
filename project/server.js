const http = require("http");
const fs = require("fs");

const PORT = 3000;
const DATA_FILE = "./students.json";

function getStudents() {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

function saveStudents(students) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
}

const server = http.createServer((req, res) => {

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // GET students
  if (req.method === "GET" && req.url === "/api/students") {

    const students = getStudents();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  }

  // ADD student
  else if (req.method === "POST" && req.url === "/api/students") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      console.log("POST BODY:", body); // debug

      const newStudent = JSON.parse(body);

      const students = getStudents();

      newStudent.id = Date.now();

      students.push(newStudent);

      saveStudents(students);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student added" }));
    });
  }

  // DELETE student
  else if (req.method === "DELETE" && req.url.startsWith("/api/students/")) {

    const id = parseInt(req.url.split("/")[3]);

    let students = getStudents();

    students = students.filter((s) => s.id !== id);

    saveStudents(students);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Deleted" }));
  }

  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});