const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitController');

// Роут для получения всех фруктов
router.get('/fruits', fruitController.getAllFruits);

module.exports = router;