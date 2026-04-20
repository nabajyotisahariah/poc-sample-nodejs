const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Nodejs application' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});