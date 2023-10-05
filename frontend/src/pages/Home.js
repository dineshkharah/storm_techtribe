import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <>
      {/* <div class="home" id="home"></div>
      <nav class="nav">
        <div class="logo">
          <a href="#home">HiveVibe</a>
        </div>

        <div class="test" id="test" onclick="display()">
          <img src="img/chat.png" style="height: 50px;" />
        </div>

        <div class="chat-bar-collapsible" id="test2">
          <button id="chat-button" class="collapsible">
            Chat with us!
            <div class="close" id="close" onclick="band()">
              {" "}
              <img src="img/close.png" style="height: 20px;" />
            </div>
          </button>

          <div class="content1">
            <div class="full-chat-block">
              <div class="outer-container">
                <div class="chat-container">
                  <div id="chatbox">
                    <h5 id="chat-timestamp"></h5>
                    <p id="botStarterMessage" class="botText">
                      <span>Loading...</span>
                    </p>
                  </div>

                  <div class="chat-bar-input-block">
                    <div id="userInput">
                      <input
                        id="textInput"
                        class="input-box"
                        type="text"
                        name="msg"
                        placeholder="Tap 'Enter' to send a message"
                      />
                      <p></p>
                    </div>

                    <div class="chat-bar-icons">
                      <i
                        id="chat-icon"
                        style="color: #333;"
                        class="fa fa-fw fa-send"
                        onclick="sendButton()"
                      ></i>
                    </div>
                  </div>

                  <div id="chat-bar-bottom">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cred">
          <div class="profile">
            <div class="new--nav--cred">
              <div>
                <a href="log.html">
                  <button class="cred--btn">Log</button>
                </a>
              </div>
              <div>
                <a href="log.html">
                  <button class="cred--btn">Sign</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="svg">
        <svg height="700" width="100%">
          <ellipse
            cx="740"
            cy="10"
            rx="650"
            ry="700"
            style="fill: rgb(31, 31, 46)"
          />
        </svg>
      </div>

      <div class="main">
        <div class="head">
          <div class="h1">
            Boost meaningful interactions with your workforce
          </div>
          <div class="h2">
            A single employee engagement platform to engage, recognize, and
            communicate with all your employees.
          </div>
          <div class="try">
            <a href="javascript:void(0)">Try Now </a>
          </div>
        </div>
      </div>

      <div class="why">
        <a> Why Hive Vibe? </a>
      </div>

      <div class="live">
        <div class="area" id="area1">
          <div class="left">
            <a>
              Hive Vibe boosts meaningful interactions and an intelligence
              dashboard
            </a>
          </div>
          <div class="right">
            <div class="box1">
              <div class="check">
                <img src="img/tick.png" />
              </div>
              <div class="word">Interactive</div>
            </div>
            <div class="box2">
              <div class="check">
                <img src="img/tick.png" style="margin-left: -5px;" />
              </div>
              <div class="word" style="margin-left: -10px;">
                Boosts confidence
              </div>
            </div>
            <div class="box3">
              <div class="check">
                <img src="img/tick.png" />
              </div>
              <div class="word"> Insights</div>
            </div>
          </div>
        </div>
      </div>

      <div class="end">
        <div class="endtitle">Get all your employees in the loop</div>
        <div class="endsubtext">Start your free trial today</div>
        <div class="tryend">
          <a href="javascript:void(0)"> Try Now </a>
        </div>
      </div>

      <div class="footer">
        <div class="logoend">Hive Vibe</div>
        <ul>
          <li>
            <a href="javascript:void(0)"> Home</a>
          </li>
          <li>
            <a href="javascript:void(0)">Help </a>
          </li>
          <li>
            <a href="javascript:void(0)">Support </a>
          </li>
          <li>
            <a href="javascript:void(0)"> Feedback</a>
          </li>
          <li>
            <a href="javascript:void(0)"> Dev's </a>
          </li>
        </ul>

        <div class="socials">
          <div class="facebook">
            <a href="#" class="fa fa-facebook"></a>
          </div>
          <div class="twitter">
            <a href="#" class="fa fa-twitter"></a>
          </div>
          <div class="instagram">
            <a href="#" class="fa fa-instagram"></a>
          </div>
          <div class="google">
            <a href="#" class="fa fa-google"></a>
          </div>
        </div>
      </div> */}
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={login}
      >
        login
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={signup}
      >
        sign up
      </button>
    </>
  );
};

export default Home;
