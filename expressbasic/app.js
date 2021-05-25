const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.get('/', (req, res) => {
  const fruit = [{ name: 'appel' }, { name: 'watermelon' }, { name: 'mango' }];
  res.render('index', {
    name: 'Maeda',
    greet: 'good days',
    fruit: fruit,
  });
});
app.get('/:name', (req, res) => res.send(`${req.params.name} here`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
