const express = require('express');
const app = express();
const port = 8000;

const returnValue = 'Hello users!';

app.get('/users', (req, res) => {
  res.send(returnValue);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});