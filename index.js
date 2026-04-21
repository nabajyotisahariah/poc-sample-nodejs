const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Nodejs application 21st April 2026' });
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});