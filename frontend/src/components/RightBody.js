import React from "react";
import { useContext } from "react";
import ForumView from "./ForumView";
import { MainContext } from "../context/MainContext";
import TaskView from "./TaskView";
import FeedbackView from "./FeedbackView";
import Analytics from "./Analytics";
import Account from "./Account";

const RightBody = ({ disable, role }) => {
  const { component } = useContext(MainContext);
  return (
    <div>
      <div className="mid--menu">
        {component === "forum" ? (
          <ForumView />
        ) : component === "task" ? (
          <TaskView disable={disable} role={role} />
        ) : component === "feedback" ? (
          <FeedbackView />
        ) : component === "analytics" ? (
          <Analytics />
        ) : component === "account" ? (
          <Account />
        ) : null}
      </div>
    </div>
  );
};

export default RightBody;
