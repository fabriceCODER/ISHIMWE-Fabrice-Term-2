const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//for adding numbers
app.post('/sum', (req, res) => {
  const numbers = req.body.numbers;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  res.send({ sum });
  //producct operation
app.post('/product', (req, res) => {
  const numbers = req.body.numbers;
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  res.send({ product });
});
});


app.listen(3000, () => {
  console.log('API listening on port 3000');
});
