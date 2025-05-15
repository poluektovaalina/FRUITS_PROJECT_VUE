const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const fruitRoutes = require('./routes/fruitRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к базе данных и запуск сервера
sequelize
    .authenticate()
    .then(() => {
        console.log('Подключение к базе данных установлено успешно.');
        return sequelize.sync(); // Синхронизация моделей после успешной аутентификации
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Не удалось подключиться к базе данных или синхронизировать модели:', err);
    });

// Использование роутов
app.use('/auth', authRoutes);
app.use('/api', fruitRoutes);

app.get('/', (req, res) => {
    res.send('API работает!');
});