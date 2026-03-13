const express = require('express');
const router = express.Router();
const { getStays } = require('../controllers/stayController');

router.get('/', getStays);

module.exports = router;