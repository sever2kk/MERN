// Маршрутизатор набора точок доступа к веб-сервису управления пользователя:
const router = require('express').Router();
const { response } = require('express');
let User = require('../models/user.model');

// 1 - Получение общего списка всех пользователей
router.route('/').get((request, response) => {
    User.find()
        .then(users => response.json(users))
        .catch(error => response.status(400).json(`Server Get Error: ${error}`));
});

// 2 - Добавление нового пользователя: 
router.route('/add').get((request, response) => {
    const userName = request.body.username;
    const newUser = new User({userName});
    newUser.save()
        .then(() => response.json('User added seccessfully!'))
        .catch(error => response.status(400).json(`Server AddUser Error: ${error}`));

});

module.exports = router;
