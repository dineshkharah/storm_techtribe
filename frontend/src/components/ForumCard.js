import React from "react";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";
import ForumModal from "./ForumModal";

const ForumCard = ({ question, answer, unqId }) => {
  const { modalVisible, setmodalVisible, forummodal, setforummodal } =
    useContext(MainContext);

  const modal = () => {
    setmodalVisible(true);
    setforummodal({ question, answer, unqId });
  };
  return (
    <>
      <div className="border border-black rounded-[20px] p-4 bg-white space-y-4 relative">
        <div className="question bg-inherit">
          <div className=" bg-inherit font-bold">Question:</div>
          {question}
        </div>

        <div className="answer bg-inherit">
          <div className=" bg-inherit font-bold">Answer:</div>
          {answer}
        </div>
        <div className="add absolute bottom-4 right-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => modal()}
          >
            Add
          </button>
        </div>
      </div>
      {/* <ForumModal isVisible={modalVisible} /> */}
    </>
  );
};

export default ForumCard;
