// Маршрутизатор набора точок доступа к веб-сервису управления тренеровками:
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// 1 - Получение общего списка всех тренировок:
router.route('/').get((request, response) => {
    User.find()
        .then(exercises => response.json(exercises))
        .catch(error => response.status(400).json(`Server Get Error: ${error}`));
});

// 2 - Добавление нового тренеровки: 
router.route('/add').get((request, response) => {
    const username = request.body.username;
    const description = request.body.description;
    const duration = Number(request.body.duration);
    const date = Date.parse(request.body.data);

    const newExercise = new Exercise({
        userName, description, duration, data
    });
    newExercise.save()
        .then(() => response.json('Exercise added seccessfully!'))
        .catch(error => response.status(400).json(`Server AddUser Error: ${error}`));

});


// 3 - Поиск тренеровки по ID:
// ...

// 4 - Удаление тренеровки по ID:
// ...

// 5 - Изменение тренеровки по ID:
// ...


module.exports = router;