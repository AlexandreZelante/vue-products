require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './dist')));

app.get('/products', (req, res) => {
  const response = [
    {
      id: 1,
      name: "oi"
    },
    {
      id: 2,
      name: "oi2"
    },
    {
      id: 3,
      name: "oi3"
    },
    {
      id: 4,
      name: "oi4"
    }
  ];

  return res.json(response);
});

app.get('/vars', (req, res) => {
  return res.json({
    values: process.env.TEST_ENV
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(3030, () => {
  console.log('running on port 3030');
});