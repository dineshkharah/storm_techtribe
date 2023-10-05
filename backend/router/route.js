const express = require('express');
const router = express.Router();
const { getAllQueries, updateSingleQuery, createQuery } = require('../controllers/queryController');
const { getAllTasks, updateSingleTask, createTask } = require('../controllers/TaskController');
const { SignUp, LoginIn , getAllUsers} = require('../controllers/UserController');

router.get('/', (req, res) => {
    res.send('Hello World');
});


// Users
router.post('/signup', SignUp);
router.post('/login', LoginIn);
router.get('/users', getAllUsers)

// Queries
router.get('/queries', getAllQueries);
router.post('/query', createQuery);
router.patch('/query/:id', updateSingleQuery);

// Tasks
router.get('/tasks', getAllTasks);
router.post('/task', createTask);
router.patch('/task/:id', updateSingleTask);

module.exports = router;