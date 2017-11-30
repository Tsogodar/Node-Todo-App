const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: String,
    date: String
});

let Todo = module.exports = mongoose.model('Todo', todoSchema);

module.exports = {

    add: (newTask, callback) => {
        let task = new Todo(newTask).save(callback)
    },

    findTasks: (callback) => {
        Todo.find().sort({date: -1}).then(callback);
    },

    remove: (taskId, callback) => {
        Todo.remove({
            _id: mongoose.Types.ObjectId(taskId)
        }, callback)
    }
};


