import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const LoginModal = ({ isVisible }) => {
  const { loginModal, setloginModal, refresh, setrefresh } =
    useContext(MainContext);

  const [email, setEmail] = useState("");
  const [names, setNames] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    details();
  }, []);

  const details = () => {
    const alldetails = JSON.parse(localStorage.getItem("userInfo"));

    setEmail(alldetails.email);
    setNames(alldetails.name);
    setRole(alldetails.role);
  };

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      setloginModal(false);
    }
  };
  if (!isVisible) return null;

  return (
    <>
      <div
        className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={handleClose}
        id="modalBackground"
      >
        <div className="bg-white border-1 border-black w-[700px] h-[400px] rounded-[30px] overflow-hidden  relative p-10  ">
          <div
            className="absolute top-6 right-6 hover:cursor-pointer"
            onClick={() => setloginModal(false)}
          >
            X
          </div>
          <div className="question bg-inherit mb-9">
            <div className=" bg-inherit font-bold text-3xl ">
              User Details:{" "}
            </div>
          </div>
          <div className="question bg-inherit mb-9 p-2 text-lg ">
            <div className=" bg-inherit font-bold">Name: {names}</div>
          </div>
          <div className="question bg-inherit mb-9 p-2 text-lg">
            <div className=" bg-inherit font-bold">Email: {email} </div>
          </div>
          <div className="question bg-inherit mb-9 p-2 text-lg">
            <div className=" bg-inherit font-bold">Role: {role} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
