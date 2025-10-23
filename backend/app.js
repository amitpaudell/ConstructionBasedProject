require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const constructionRoutes = require('./routes/construction');

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/construct', constructionRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server running at port http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log('Error while connecting to database', err);
  });
