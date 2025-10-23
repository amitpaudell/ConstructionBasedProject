const express = require('express');
const Service = require('../models/ServiceModel');

const router = express.Router();

//Get all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'Get all workout' });
});

//Get single workouts
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a single workout' });
});

//POST a new workouts
router.post('/', async (req, res) => {
  const { image, title, description, status } = req.body;

  try {
    const service = await Service.create({ image, title, description, status });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete a  workouts
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'delete a workout' });
});

//Update a  workouts
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'update a workout' });
});

module.exports = router;
