const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userServices = require('./user_services');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/user-items', async (req, res) => {
  const { userId } = req.query;
  if (userId === undefined) {
    // if there was an error and the user isn't signed in
    res.status(401).end();
  } else {
    // user signed in so send all their items
    const result = await userServices.getUserItems();
    res.send(result).status(200).end();
  }
});
