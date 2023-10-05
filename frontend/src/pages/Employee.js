import React from "react";
import Navbar from "../components/Navbar";
import LeftMenu from "../components/LeftMenu";
import RightBody from "../components/RightBody";

const Employee = () => {
  return (
    <>
      <Navbar />
      <div className="app--content">
        <LeftMenu role="Employee" disable="analytics" />
        <RightBody role="Employee" />
      </div>
    </>
  );
};

export default Employee;
