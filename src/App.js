import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import Home from "./assets/home.svg";
import Saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
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
          <div className="chat">
            <img src={userIcon} alt="" className="chatImg" />
            <p className="txt">
              Lorem ipsum dolor sit amet consentncetur dipisiling elit.
              Obcaecati sint nobis exceprture optio voluptas nemo ex officiis
              eos quam illo
            </p>
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} alt="" className="chatImg" />
            <p className="txt">
              Eu tempor labore id in sunt voluptate do dolore veniam anim elit
              velit. Qui anim sit esse officia reprehenderit qui irure
              incididunt. Consectetur labore ipsum officia ex qui exercitation
              id anim aliquip ad eu elit irure. Consequat mollit non laboris
              minim dolor ea ex Lorem cillum proident excepteur anim. Non duis
              nisi aliqua aute culpa nostrud dolore voluptate nostrud ut
              incididunt esse eiusmod ullamco. Fugiat labore do id culpa quis
              veniam excepteur officia magna esse sint consequat labore sunt.
              Enim ad reprehenderit non ad anim tempor fugiat ea pariatur amet
              consectetur proident. Sint elit aliquip magna sit et officia culpa
              fugiat duis elit. Tempor eu irure ullamco amet incididunt ad magna
              dolore eu occaecat aliquip duis nisi. Pariatur non incididunt duis
              irure laborum officia mollit ex eu aliquip. Cupidatat esse nostrud
              anim elit. Esse ad sunt ipsum ullamco minim in fugiat fugiat sint
              enim occaecat adipisicing exercitation. Officia labore enim elit
              consectetur sint est et quis enim velit et quis ex sit. Labore
              dolor consectetur ut incididunt exercitation dolor. Ipsum tempor
              aliquip exercitation incididunt laborum sit reprehenderit dolor
              
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="send a message ..." />
            <button className="send">
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
