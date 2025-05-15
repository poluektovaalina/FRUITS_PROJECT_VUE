const Fruit = require('../models/fruit');

const getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.findAll();
    res.status(200).json(fruits);
  } catch (error) {
    console.error('Ошибка при получении списка фруктов:', error);
    res.status(500).json({ message: 'Не удалось получить список фруктов' });
  }
};

module.exports = { getAllFruits };