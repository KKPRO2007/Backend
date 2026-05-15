const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const file = "db.json";

const read = () => JSON.parse(fs.readFileSync(file));
const write = (data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

app.post("/books", (req, res) => {
  const db = read();
  const book = { id: Date.now().toString(), ...req.body };
  db.books.push(book);
  write(db);
  res.status(201).json(book);
});

app.get("/books", (req, res) => {
  const db = read();
  res.json(db.books);
});

app.get("/books/:id", (req, res) => {
  const db = read();
  const book = db.books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ msg: "Not found" });
  res.json(book);
});

app.put("/books/:id", (req, res) => {
  const db = read();
  const index = db.books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ msg: "Not found" });
  db.books[index] = { ...db.books[index], ...req.body };
  write(db);
  res.json(db.books[index]);
});

app.delete("/books/:id", (req, res) => {
  const db = read();
  db.books = db.books.filter(b => b.id !== req.params.id);
  write(db);
  res.json({ msg: "Deleted" });
});

app.listen(3000, () => console.log("http://localhost:3000"));