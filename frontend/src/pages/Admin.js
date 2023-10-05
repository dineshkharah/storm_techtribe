import React from "react";
import Navbar from "../components/Navbar";
import LeftMenu from "../components/LeftMenu";
import RightBody from "../components/RightBody";
import LoginModal from "../components/LoginModal";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";

const Admin = () => {
  const { loginModal, setloginModal } = useContext(MainContext);
  return (
    <>
      <Navbar />
      <div className="app--content">
        <LeftMenu role="Admin" />
        <RightBody role="Admin" disable="markdone" />
      </div>
      {/* <LoginModal isVisible={true} /> */}
    </>
  );
};

export default Admin;
