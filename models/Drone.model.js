// Iteration #1
const mongoose = require('mongoose');
const Movie = require('../models/Drone.model');

mongoose.connect('mongodb://127.0.0.1:27017/lab-express-drones')
.then(() => {
  console.log('connected to database');
})
.catch((error) => {
  console.log('error connecting to database');
})