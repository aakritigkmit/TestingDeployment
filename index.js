const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.send('Hello, I am health route !');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


