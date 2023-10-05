import React, { useContext } from "react";
import { useState } from "react";
import { MainContext } from "../context/MainContext";
// import { navigate } from "@reach/router";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

const LeftMenu = ({ role, disable }) => {
  const { component, setComponent, mainrole, setmainrole } =
    useContext(MainContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("mainrole");
    setmainrole("");
    navigate("/");

    // setComponent("login");
  };
  return (
    <div>
      <div className="left--menu p-5">
        <div class="hierarchy">
          <h1
            className="text-4xl font-bold"
            style={{
              fontWeight: "normal",
              paddingTop: "20px",
              background: "none",
            }}
          >
            {role}
          </h1>
          <ul className="sidebar--list">
            <li
              className="sidebar--list--item"
              onClick={() => setComponent("forum")}
            >
              <a>Forum</a>
            </li>
            <li
              className="sidebar--list--item"
              onClick={() => setComponent("task")}
            >
              <a>Task</a>
            </li>
            <li
              className="sidebar--list--item"
              onClick={() => setComponent("feedback")}
            >
              <a>Feedback</a>
            </li>
            {mainrole === "employee" ? null : (
              <li
                className="sidebar--list--item"
                onClick={() => setComponent("analytics")}
              >
                <a>Analytics</a>
              </li>
            )}
            <li className="sidebar--list bg-inherit ">
              <a className="bg-inherit text-xl cursor-pointer" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <LoginModal isVisible={true} /> */}
    </div>
  );
};

export default LeftMenu;
