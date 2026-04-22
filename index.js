const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/v3', (req, res) => {
  res.json({ message: 'Welcome to Nodejs application v3 deployment' });
});


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Nodejs application deployment' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});