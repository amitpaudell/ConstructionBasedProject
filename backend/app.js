require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const constructionRoutes = require('./routes/construction');
const projectRoutes = require('./routes/projects');

const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'API is running',
    endpoints: {
      construct: '/api/construct',
      project: '/api/project',
    },
  });
});

//routes
app.use('/api/construct', constructionRoutes);
app.use('/api/project', projectRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error while connecting to database', err);
  });
module.exports = app;
