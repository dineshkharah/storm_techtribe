import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
