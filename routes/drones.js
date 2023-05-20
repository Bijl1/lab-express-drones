const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here
// List all drones
router.get('/drones', async (req, res) => {
  try {
    const allDronesFromDb = await Drone.find();
    res.render('drones/list.hbs', { drones: allDronesFromDb });
  } catch (error) {
    console.log(error);
  }
});

// Render the create drone form
router.get('/drones/create', (req, res) => {
  res.render('drones/create-form.hbs');
});

// Create a new drone
router.post('/drones/create', async (req, res) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    console.log(error);
  }
});

// Render the edit form for a specific drone
router.get('/drones/:id/edit', async (req, res) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findById(id);
    res.render('drones/update-form.hbs', { drone });
  } catch (error) {
    console.log(error);
  }
});

// Update a specific drone
router.post('/drones/:id/edit', async (req, res) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    console.log(error);
  }
});

// Delete a specific drone
router.post('/drones/:id/delete', async (req, res) => {
  const { id } = req.params;
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect('/drones');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;