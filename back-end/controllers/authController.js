const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Sequelize} = require('sequelize');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Проверка, существует ли уже пользователь с таким именем или email
        const existingUser = await User.findOne({
            where: {
                [Sequelize.Op.or]: [{ username }, { email }],
            },
        });

        if (existingUser) {
            return res.status(409).json({ message: 'Пользователь с таким именем или email уже существует' });
        }

        // Хэширование пароля
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создание нового пользователя
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(500).json({ message: 'Ошибка сервера при регистрации' });
    }
};

const login = async (req, res) => {
    try {
        const { identifier, password } = req.body; // identifier может быть username или email

        // Поиск пользователя по username или email
        const user = await User.findOne({
            where: {
                [Sequelize.Op.or]: [{ username: identifier }, { email: identifier }],
            },
        });

        if (!user) {
            return res.status(401).json({ message: 'Неверные учетные данные' });
        }

        // Сравнение паролей
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверные учетные данные' });
        }

        // Создание JWT токена
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });

        res.status(200).json({ token, userId: user.id, username: user.username });
    } catch (error) {
        console.error('Ошибка входа:', error);
        res.status(500).json({ message: 'Ошибка сервера при входе' });
    }
};

module.exports = { register, login };