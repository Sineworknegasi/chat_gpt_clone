import "./App.css";
import React, { useState } from "react";
import gptlogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import Home from "./assets/home.svg";
import Saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAi } from "./openai";
function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      test: " hi I am Chat gpt ,  a state of the art language model developed by open ai . I am desingend to undestand and generate human like test based on the input i recieve. you can ask me questions have converstion seek information or even request assinstance with various task just let me know how can i help you ",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAi(input);
    setMessages([
      ...messages,
      {
        text: input,
        isBot: false,
      },
      {
        text: input,
        isBot: true,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <div className="logos">
              <img src={gptlogo} alt="Logo" className="logo" />
              <span className="brand">ChatGPT</span>
            </div>
            <button className="midBtn">
              <img src={addBtn} alt="new chat" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="Query" className="queryBtn" />
                What is programming
              </button>
              <button className="query">
                <img src={msgIcon} alt="Query" className="queryBtn" />
                how to use an API
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItem">
            <img src={Home} alt="" className="listitemsImg" />
            Home
          </div>
          <div className="listItem">
            <img src={Saved} alt="" className="listitemsImg" />
            Saved
          </div>
          <div className="listItem">
            <img src={rocket} alt="" className="listitemsImg" />
            Upgrade to pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img
                src={message.isBot ? gptImgLogo : userIcon}
                alt=""
                className="chatImg"
              />
              <p className="txt">{message.test}</p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="send a message ..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="" />
            </button>
          </div>
          <p>
            ChatGpt may produce inaccurate information about people, place, of
            facts. chatGpt August 20 version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
