const express = require('express');
const router = express.Router();

// Require controllers
const product_controller = require('../controllers/product.controller');

// simple test url check that all of out files are communicating correctly
router.get('/test', product_controller.test);

module.exports = router;