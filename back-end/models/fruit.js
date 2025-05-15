const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Убедитесь, что путь к вашему файлу database.js верный

const Fruit = sequelize.define('Fruit', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING, // Или DataTypes.INTEGER, в зависимости от того, как вы храните цену
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'AllFruits', // Указываем имя вашей таблицы
  timestamps: false, // Отключаем автоматическое добавление полей createdAt и updatedAt, если они вам не нужны
});

module.exports = Fruit;