import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import LoginModal from "./LoginModal";

const Navbar = () => {
  // const { loginModal, setloginModal } = useContext(MainContext);

  const { refresh, setrefresh, loginModal, setloginModal } =
    useContext(MainContext);
  return (
    <div className="app--header">
      <div className="app--header--left">
        <div className="app--header--left--item text-4xl font-bold">LOGO</div>
        {/* <div className="username flex items-center justify-center text-xl">
          name
        </div> */}
      </div>
      {/* <div className="refresh bg-inherit"></div> */}
      <div className=" flex  items-center justify-between w-[250px]">
        <div
          className="refresh text-xl cursor-pointer  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setrefresh(!refresh)}
        >
          Refresh
        </div>
        <div
          className=" text-xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          onClick={() => setloginModal(true)}
        >
          login info
        </div>
      </div>
      {/* <LoginModal isVisible={loginModal} /> */}
    </div>
  );
};

export default Navbar;
