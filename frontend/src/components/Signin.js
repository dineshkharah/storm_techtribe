import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const img1 = "/images/login.jpg";
const elogo = "/images/elogo.svg";
const plogo = "/images/padlock 1.svg";
const hide = "/images/hide.svg";
const show = "/images/show.svg";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !cpassword || !role) {
      alert("Please fill all the fields");
    } else if (password !== cpassword) {
      alert("Password and Confirm Password do not match");
    }
    axios
      .post("http://localhost:4000/api/signup", { name, email, password, role })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          navigate("/login");
        } else {
          alert("Email already exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="login-container flex">
      <div className="img w-1/2 h-full bg-cover">
        <img className="h-[100vh]" src={img1} alt="" />
      </div>
      <div className="content w-1/2">
        <div className="content-container flex flex-col font-sans mt-16 mx-28 ">
          <div className="heading text-3xl font-semibold">Sign up</div>
          <div className=" register-redirect mt-5 flex flex-col">
            <div>If you already have an account login</div>
            <div>
              You can
              <Link to="/login">
                <span className="font-bold text-orange-600">Login here !</span>
              </Link>
            </div>
            <form onSubmit={submitHandler}>
              <div className="input-field flex flex-col mt-5 gap-3">
                <div className="role">
                  <div className="text font-medium mb-3">Role</div>
                  <select
                    value={role}
                    onChange={handleRole}
                    onClick={() => {
                      setEmailFocus(false);
                      setPassFocus(false);
                    }}
                    className="bg-gray-100 w-60 h-9 rounded"
                  >
                    <option value="" disabled selected hidden>
                      Select a role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                  </select>
                </div>

                <div className="name mt-3">
                  <div className="text font-medium mb-3">Name</div>
                  <div className="input flex h-6">
                    {/* <img className="w-6 h-6" src={elogo} alt="" /> */}
                    <div className="ml-4">
                      <input
                        type="text"
                        className="focus:outline-none"
                        onFocus={() => {
                          setEmailFocus(true);
                          setPassFocus(false);
                        }}
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  {emailFocus ? (
                    <hr className="mt-2 w-10/12 border-2 border-orange-600" />
                  ) : (
                    <hr className="mt-2 w-10/12 border-2 " />
                  )}
                </div>

                <div className="email mt-3">
                  <div className="text font-medium mb-3">Email</div>
                  <div className="input flex h-6">
                    <img className="w-6 h-6" src={elogo} alt="" />
                    <div className="ml-4">
                      <input
                        type="text"
                        className="focus:outline-none"
                        onFocus={() => {
                          setEmailFocus(true);
                          setPassFocus(false);
                        }}
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  {emailFocus ? (
                    <hr className="mt-2 w-10/12 border-2 border-orange-600" />
                  ) : (
                    <hr className="mt-2 w-10/12 border-2 " />
                  )}
                </div>
                <div className="password mt-3">
                  <div className="text font-medium mb-3">Password</div>
                  <div className="input flex h-6">
                    <img className="w-6 h-6" src={plogo} alt="" />
                    <div className="ml-4 pr-40">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="focus:outline-none "
                        placeholder="Enter password"
                        onFocus={() => {
                          setEmailFocus(false);
                          setPassFocus(true);
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {showPassword ? (
                      <div onClick={() => setShowPassword(false)}>
                        <img
                          src={hide}
                          className="h-6 w-6"
                          alt="hide"
                          onClick={() => setShowPassword(false)}
                        />
                      </div>
                    ) : (
                      <div onClick={() => setShowPassword(true)}>
                        <img
                          src={show}
                          className="h-6 w-6"
                          alt="show"
                          onClick={() => setShowPassword(true)}
                        />
                      </div>
                    )}
                  </div>
                  {passFocus ? (
                    <hr className="mt-2 w-10/12 border-2 border-orange-600" />
                  ) : (
                    <hr className="mt-2 w-10/12 border-2 " />
                  )}
                </div>
                <div className="password mt-3">
                  <div className="text font-medium mb-3">Confirm Password</div>
                  <div className="input flex h-6">
                    <img className="w-6 h-6" src={plogo} alt="" />
                    <div className="ml-4 pr-40">
                      <input
                        type={showCpassword ? "text" : "password"}
                        className="focus:outline-none "
                        placeholder="Confirm your password"
                        onFocus={() => {
                          setEmailFocus(false);
                          setPassFocus(true);
                        }}
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                      />
                    </div>
                    {showCpassword ? (
                      <div onClick={() => setShowCpassword(false)}>
                        <img
                          src={hide}
                          className="h-6 w-6"
                          alt="hide"
                          onClick={() => setShowCpassword(false)}
                        />
                      </div>
                    ) : (
                      <div onClick={() => setShowCpassword(true)}>
                        <img
                          src={show}
                          className="h-6 w-6"
                          alt="show"
                          onClick={() => setShowCpassword(true)}
                        />
                      </div>
                    )}
                  </div>
                  {passFocus ? (
                    <hr className="mt-2 w-10/12 border-2 border-orange-600" />
                  ) : (
                    <hr className="mt-2 w-10/12 border-2 " />
                  )}
                </div>
              </div>
              <div className="cursor-pointer border-2 w-3/4 mt-16 h-12 bg-orange-600 p-3 text-center ml-8 rounded-full font-medium text-l text-white ">
                <input
                  className="cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
