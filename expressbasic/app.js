const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});
app.get('/:name', (req, res) => res.send(`${req.params.name} here`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
