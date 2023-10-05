const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    points:{
        type: Number,
        default: 0
    },
    dueDate: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
},{
    collection: 'Tasks'
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;