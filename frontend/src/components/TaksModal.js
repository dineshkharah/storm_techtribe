import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";
import { useState } from "react";

const TaksModal = ({ isVisible }) => {
  const { taskModal, settaskModal, refresh, setrefresh } =
    useContext(MainContext);
  const [task, settask] = useState("");
  const [duedate, setduedate] = useState("");

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      settaskModal(false);
    }
  };

  const submithandler = async () => {
    await axios
      .post(`http://localhost:4000/api/task`, {
        task: task,
        dueDate: duedate,
      })
      .then((res) => {
        console.log(res.data);
        settask("");
        setduedate("");
        setrefresh(!refresh);
        settaskModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!isVisible) return null;

  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="modalBackground"
    >
      <div className="bg-white border-1 border-black w-[700px] h-[400px] rounded-[30px] overflow-hidden  relative p-10  ">
        <div
          className="absolute top-6 right-6 hover:cursor-pointer"
          onClick={() => settaskModal(false)}
        >
          X
        </div>
        <div className="question bg-inherit mb-9">
          <div className=" bg-inherit font-bold">Add Task</div>
        </div>

        <div className="question bg-inherit mb-9 space-y-9 flex flex-col">
          {/* <div className=" bg-inherit font-bold">Write:</div> */}
          <textarea
            id="paragraph"
            placeholder="Write your task here..."
            value={task}
            onChange={(e) => settask(e.target.value)}
            style={{ width: "600px" }}
          ></textarea>
          <input
            className="h-[3rem]"
            type="text"
            placeholder="enter date im following mm/dd"
            value={duedate}
            onChange={(e) => setduedate(e.target.value)}
          ></input>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={submithandler}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaksModal;
