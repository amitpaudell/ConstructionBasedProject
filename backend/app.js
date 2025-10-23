require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.json({ mssg: 'Welcome to the app' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port http://localhost:${process.env.PORT}`);
});
