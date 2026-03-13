const Stay = require('../models/stayModel');

// Get all stays
const getStays = async (req, res) => {
  try {
    const stays = await Stay.find();
    res.json(stays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStays };