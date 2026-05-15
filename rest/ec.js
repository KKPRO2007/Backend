const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const file = "db.json";

const read = () => JSON.parse(fs.readFileSync(file));
const write = (data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

/* PRODUCTS */

app.post("/products", (req, res) => {
  const db = read();
  const item = { id: Date.now().toString(), ...req.body };
  db.products.push(item);
  write(db);
  res.status(201).json(item);
});

app.get("/products", (req, res) => {
  const db = read();
  res.json(db.products);
});

app.get("/products/:id", (req, res) => {
  const db = read();
  const item = db.products.find(p => p.id === req.params.id);
  if (!item) return res.status(404).json({ msg: "Not found" });
  res.json(item);
});

app.put("/products/:id", (req, res) => {
  const db = read();
  const i = db.products.findIndex(p => p.id === req.params.id);
  if (i === -1) return res.status(404).json({ msg: "Not found" });
  db.products[i] = { ...db.products[i], ...req.body };
  write(db);
  res.json(db.products[i]);
});

app.delete("/products/:id", (req, res) => {
  const db = read();
  db.products = db.products.filter(p => p.id !== req.params.id);
  write(db);
  res.json({ msg: "Deleted" });
});

/* ORDERS */

app.post("/orders", (req, res) => {
  const db = read();
  const order = { id: Date.now().toString(), status: "pending", ...req.body };
  db.orders.push(order);
  write(db);
  res.status(201).json(order);
});

app.get("/orders", (req, res) => {
  const db = read();
  res.json(db.orders);
});

app.get("/orders/:id", (req, res) => {
  const db = read();
  const order = db.orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ msg: "Not found" });
  res.json(order);
});

app.patch("/orders/:id", (req, res) => {
  const db = read();
  const order = db.orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ msg: "Not found" });
  order.status = req.body.status;
  write(db);
  res.json(order);
});

app.delete("/orders/:id", (req, res) => {
  const db = read();
  db.orders = db.orders.filter(o => o.id !== req.params.id);
  write(db);
  res.json({ msg: "Deleted" });
});

app.listen(3000);