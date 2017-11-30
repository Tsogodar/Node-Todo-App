const express = require('express');
const router = express.Router();
const moment=require('moment');
const todoModel = require('../models/Todo');

moment.locale('pl');

router.post('/add', (req, res) => {
    let newTodo = {
        title: req.body.newTodoInput,
        date: moment().format('D MMMM YYYY, HH:mm:ss')
    };
    todoModel.add(newTodo, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('back');
        }
    });
});

router.get('/remove/:id', (req, res) => {
    todoModel.remove(req.params.id, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('back');
        }
    });
});

module.exports = router;