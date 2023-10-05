import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";
import { useState } from "react";

const ForumModal = ({ isVisible }) => {
  const { setmodalVisible, forummodal, refresh, setrefresh } =
    useContext(MainContext);
  const [answer, setanswer] = useState("");
  const id = forummodal.unqId;
  // console.log(id);

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      setmodalVisible(false);
    }
  };

  const submithandler = async () => {
    await axios
      .patch(`http://localhost:4000/api/query/${id}`, {
        answer: answer,
      })
      .then((res) => {
        // console.log(res.data);
        setanswer("");
        setrefresh(!refresh);
        setmodalVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(answer);
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
          onClick={() => setmodalVisible(false)}
        >
          X
        </div>
        <div className="question bg-inherit mb-9">
          <div className=" bg-inherit font-bold">Question:</div>
          {forummodal.question}
        </div>
        <div className="question bg-inherit mb-9">
          <div className=" bg-inherit font-bold">Previous Answer:</div>
          {forummodal.answer}
        </div>
        <div className="question bg-inherit mb-9">
          <div className=" bg-inherit font-bold">Write:</div>
          <textarea
            id="paragraph"
            placeholder="Write your answer here..."
            value={answer}
            onChange={(e) => setanswer(e.target.value)}
            style={{ width: "600px" }}
          ></textarea>
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

export default ForumModal;
