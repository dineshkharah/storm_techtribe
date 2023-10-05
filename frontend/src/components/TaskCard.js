import React from "react";
import { useContext } from "react";
import axios from "axios";
import { MainContext } from "../context/MainContext";
import { useEffect } from "react";
import { useState } from "react";

const TaskCard = ({ unqId, task, due, points, compl, disable, role }) => {
  const { refresh, setrefresh, settaskModal, mainrole } =
    useContext(MainContext);
  //   console.log("mainrole", mainrole);

  const taskhandler = async () => {
    // console.log("unqId", unqId);
    await axios
      .patch(`http://localhost:4000/api/task/${unqId}`)
      .then((res) => {
        // console.log(res.data);
        setrefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className={
          compl === true
            ? "border border-black rounded-[20px] p-4 bg-green-500  flex justify-between items-center"
            : "border border-black rounded-[20px] p-4 bg-red-500  flex justify-between items-center"
        }
      >
        <div className="answer bg-inherit">
          <div className=" bg-inherit font-bold">Task: {task}</div>
        </div>
        <div className="answer bg-inherit">
          <div className=" bg-inherit font-bold">Due: {due}</div>
        </div>
        {mainrole === "admin" ? (
          <div className="answer bg-inherit">
            <div className=" bg-inherit font-bold">Points: {points}</div>
          </div>
        ) : (
          <div className="add bg-inherit">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => taskhandler()}
            >
              Mark Done
            </button>
          </div>
        )}
        {/* <div className="add bg-inherit">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => taskhandler()}
          >
            Mark Done
          </button>
        </div> */}
      </div>
      {/* <ForumModal isVisible={modalVisible} /> */}
    </>
  );
};

export default TaskCard;
