const express = require('express');

const app = express();

// Middleware (to read JSON)
app.use(express.json());

// ✅ GET route
app.get('/', (req, res) => {
  res.send('Server running ');
});

// ✅ POST route
app.post('/data', (req, res) => {
  const { name, email } = req.body;

  console.log('Received:', name, email);

  res.json({
    message: 'Data received successfully ✅',
    data: { name, email }
  });
});

module.exports = app;