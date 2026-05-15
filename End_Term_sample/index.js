const express = require("express");
const students = require("./student.json");
const app = express();
const PORT = 3000;

// Read JSON data from request body
app.use(express.json());

// Serve HTML, CSS, and JS files
app.use(express.static(__dirname));

// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});
app.get('/students/:id', (req, res) => {
  const student = students.find(
    s => s.id === parseInt(req.params.id)
  );
  if (!student) return res.status(404).json({ message: 'Not found' });
  res.json(student);
});

// POST new student
app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json(newStudent);
});

// PUT update student by ID
app.put('/students/:id', (req, res) => {
  const index = students.findIndex(
    s => s.id === parseInt(req.params.id)
  );
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  students[index] = { ...students[index], ...req.body };
  res.json(students[index]);
});
// DELETE student by ID
app.delete('/students/:id', (req, res) => {
  const index = students.findIndex(
    s => s.id === parseInt(req.params.id)
  );
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  students.splice(index, 1);
  res.json({ message: 'Deleted' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
