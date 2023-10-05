import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";
import { useState } from "react";

const ForumQuestionModal = ({ isVisible }) => {
  const { questionModal, setquestionModal, refresh, setrefresh } =
    useContext(MainContext);

  const [question, setquestion] = useState("");

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      setquestionModal(false);
    }
  };
  const submithandler = async () => {
    await axios
      .post(`http://localhost:4000/api/query`, {
        question: question,
      })
      .then((res) => {
        console.log(res.data);
        setquestion("");
        setrefresh(!refresh);
        setquestionModal(false);
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
          onClick={() => setquestionModal(false)}
        >
          X
        </div>

        <div className="question bg-inherit my-9">
          <div className=" bg-inherit font-bold my-4">Question:</div>
          <textarea
            id="paragraph"
            placeholder="Write your question here..."
            value={question}
            onChange={(e) => setquestion(e.target.value)}
            style={{ width: "600px" }}
          ></textarea>
          <button
            className="bg-blue-500 my-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={submithandler}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumQuestionModal;
