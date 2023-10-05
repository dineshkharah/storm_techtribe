import React from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TaksModal from "./TaksModal";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";

const TaskView = ({ disable, role }) => {
  const [tasks, settasks] = useState([]);

  const { taskModal, settaskModal, refresh } = useContext(MainContext);

  useEffect(() => {
    getAllTasks();
  }, [refresh]);

  const getAllTasks = async () => {
    await axios
      .get("http://localhost:4000/api/tasks")
      .then((res) => {
        // console.log("task", res.data.tasks);
        settasks(res.data.tasks);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const addTask = () => {
    settaskModal(true);
  };

  return (
    <>
      <div className="relative">
        <div className="p-5 bg-white text-4xl font-bold">Tasks</div>
        <div className="forumbody  h-[500px] bg-white p-6 space-y-3 overflow-auto">
          {tasks.map((task, num) => {
            return (
              <TaskCard
                key={task._id}
                unqId={task._id}
                entire={task}
                task={task.task}
                due={task.dueDate}
                compl={task.completed}
                points={task.points}
                disable={disable}
                role={role}
              />
            );
          })}
          {/* <TaskCard /> */}
        </div>
        <div
          className="addquestion absolute top-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
          onClick={() => addTask()}
        >
          Add Task
        </div>

        {/* <ForumQuestionModal isVisible={questionModal} />
        <ForumModal isVisible={modalVisible} /> */}
        <TaksModal isVisible={taskModal} />
      </div>
    </>
  );
};

export default TaskView;
