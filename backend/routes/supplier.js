const express = require('express');
const { getManufacturers } = require('../controllers/supplierController');

const router = express.Router();

router.post('/query', getManufacturers);

module.exports = router;
