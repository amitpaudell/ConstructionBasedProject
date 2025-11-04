const express = require('express');

const serviceController = require('../controllers/serviceController');

const router = express.Router();

//Get all construction
router.get('/', serviceController.getServices);

//Get single construction
router.get('/:id', serviceController.getService);

//POST a new construction
router.post('/', serviceController.createService);

//Delete a  construction
router.delete('/:id', serviceController.deleteService);

//Update a  construction
router.put('/:id', serviceController.updateService);

module.exports = router;
