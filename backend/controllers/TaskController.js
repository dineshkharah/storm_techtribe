const Task = require("../models/Task");
const User = require("../models/User");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateSingleTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findById(id);

    updatedTask.completed = !updatedTask.completed;

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    if (updatedTask.dueDate === `${month}/${day}`) {
      updatedTask.points = 10;
    } else if (updatedTask.dueDate < `${month}/${day}`) {
      updatedTask.points = 5;
    } else if (updatedTask.dueDate > `${month}/${day}`) {
      updatedTask.points = 15;
    }

    await updatedTask.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { task, dueDate } = req.body;

    const newTask = new Task({
      task,
      dueDate,
      completed: false,
    });

    await newTask.save();

    res.status(201).json({
      task: newTask,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  updateSingleTask,
  createTask,
};
