const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
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

app.listen(3030, () => {
  console.log('running on port 3030');
});