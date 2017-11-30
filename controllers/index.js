const express = require('express');
const router = express.Router();
const todoModel = require('../models/Todo');

router.get('/', (req, res) => {
    todoModel.findTasks(todos => {
        res.render('index', {
            todos: todos
        })
    })
});


module.exports = router;