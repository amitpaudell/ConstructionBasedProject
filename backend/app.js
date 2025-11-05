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

// Connect to database (non-blocking for serverless)
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((err) => {
      console.log('Error while connecting to database', err);
    });
}

// Start server only in local development
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
}

// Export for Vercel serverless function
module.exports = app;
