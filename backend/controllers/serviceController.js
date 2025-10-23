const Service = require('../models/ServiceModel');

//get all service
exports.getServices = async (req, res, next) => {
  const service = await Service.find({}).sort({ createAt: -1 });
  res.status(200).json(service);
};

//get a single service

//post a service

//delete a service

//update a service
