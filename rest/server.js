const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const DB_FILE = "./db.json";

/* ===== Helper Functions ===== */
const readDB = () => JSON.parse(fs.readFileSync(DB_FILE));
const writeDB = (data) =>
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
const generateId = () => Date.now().toString();

/* ================= PRODUCTS ================= */

// CREATE
app.post("/products", (req, res) => {
  const db = readDB();
  const product = { id: generateId(), ...req.body };
  db.products.push(product);
  writeDB(db);
  res.status(201).json(product);
});

// READ ALL
app.get("/products", (req, res) => {
  const db = readDB();
  res.json(db.products);
});

// READ ONE
app.get("/products/:id", (req, res) => {
  const db = readDB();
  const product = db.products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ msg: "Not found" });
  res.json(product);
});

// UPDATE
app.put("/products/:id", (req, res) => {
  const db = readDB();
  const index = db.products.findIndex(p => p.id === req.params.id);

  if (index === -1)
    return res.status(404).json({ msg: "Product not found" });

  db.products[index] = { ...db.products[index], ...req.body };
  writeDB(db);
  res.json(db.products[index]);
});

// DELETE
app.delete("/products/:id", (req, res) => {
  const db = readDB();
  db.products = db.products.filter(p => p.id !== req.params.id);
  writeDB(db);
  res.json({ msg: "Deleted" });
});

/* ================= USERS ================= */

// REGISTER
app.post("/users/register", (req, res) => {
  const db = readDB();
  const user = { id: generateId(), ...req.body };
  db.users.push(user);
  writeDB(db);
  res.status(201).json(user);
});

// LOGIN
app.post("/users/login", (req, res) => {
  const db = readDB();
  const user = db.users.find(
    u => u.email === req.body.email && u.password === req.body.password
  );
  if (!user)
    return res.status(401).json({ msg: "Invalid credentials" });

  res.json(user);
});

/* ================= CART ================= */

// ADD TO CART
app.post("/cart", (req, res) => {
  const db = readDB();
  const item = { id: generateId(), ...req.body };
  db.cart.push(item);
  writeDB(db);
  res.status(201).json(item);
});

// GET USER CART
app.get("/cart/:userId", (req, res) => {
  const db = readDB();
  const cart = db.cart.filter(c => c.userId === req.params.userId);
  res.json(cart);
});

// DELETE CART ITEM
app.delete("/cart/:id", (req, res) => {
  const db = readDB();
  db.cart = db.cart.filter(c => c.id !== req.params.id);
  writeDB(db);
  res.json({ msg: "Removed from cart" });
});

/* ================= ORDERS ================= */

// CREATE ORDER
app.post("/orders", (req, res) => {
  const db = readDB();
  const order = { id: generateId(), ...req.body };
  db.orders.push(order);
  writeDB(db);
  res.status(201).json(order);
});

// GET ORDER
app.get("/orders/:id", (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id === req.params.id);
  res.json(order);
});

// DELETE ORDER
app.delete("/orders/:id", (req, res) => {
  const db = readDB();
  db.orders = db.orders.filter(o => o.id !== req.params.id);
  writeDB(db);
  res.json({ msg: "Order deleted" });
});

/* ================= SERVER ================= */

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});