const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitController');
const { protect } = require('../middleware/authMiddleware');

// Роут для получения всех фруктов
router.get('/fruits', protect, fruitController.getAllFruits);

module.exports = router;