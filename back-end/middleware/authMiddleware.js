const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.cookies.token; // Получаем токен из куки

  if (!token) {
    return res.status(401).json({ message: 'Нет токена, авторизация отклонена' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Добавляем информацию о пользователе в объект запроса
    next();
  } catch (err) {
    res.status(401).json({ message: 'Токен недействителен' });
  }
};

module.exports = { protect };