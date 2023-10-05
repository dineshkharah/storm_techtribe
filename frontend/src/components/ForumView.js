import React from "react";
import ForumCard from "./ForumCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ForumModal from "./ForumModal";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";
import ForumQuestionModal from "./ForumQuestionModal";
import LoginModal from "./LoginModal";

const ForumView = () => {
  const {
    modalVisible,
    refresh,
    setrefresh,
    questionModal,
    setquestionModal,
    loginModal,
    setloginModal,
  } = useContext(MainContext);

  const [queries, setqueries] = useState([]);

  useEffect(() => {
    getAllQuery();
  }, [refresh]);

  const getAllQuery = async () => {
    await axios
      .get("http://localhost:4000/api/queries")
      .then((res) => {
        // console.log(res.data.queries);
        setqueries(res.data.queries);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addQuestion = async () => {
    setquestionModal(true);
  };

  return (
    <div className="relative">
      <div className="p-5 bg-white text-4xl font-bold">Forum</div>
      <div className="forumbody h-[500px] bg-white p-6 space-y-3 overflow-auto">
        {queries.map((query, num) => {
          return (
            <ForumCard
              key={query._id}
              unqId={query._id}
              query={query}
              question={query.question}
              answer={query.answer}
            />
          );
        })}
        {/* <ForumModal isVisible={modalVisible} /> */}
        {/* {console.log("c", queries)}
        {console.log("c", queries.question)} */}
      </div>
      <div
        className="addquestion absolute top-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
        onClick={() => addQuestion()}
      >
        Add Question
      </div>
      <ForumQuestionModal isVisible={questionModal} />
      <ForumModal isVisible={modalVisible} />
      <LoginModal isVisible={loginModal} />
    </div>
  );
};

export default ForumView;
