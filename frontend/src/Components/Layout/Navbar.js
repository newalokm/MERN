import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) 
    {
      toast.error(error.response.data.message)
      setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"} style={{position:"sticky"}}>
      <div className="container">
        <div className="logo">
          {/* <img/> */}
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}  style={{ fontFamily: "sans-serif"}}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}style={{ fontFamily: "sans-serif"}}>
              All Jobs
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}style={{ fontFamily: "sans-serif"}}>
              {user && user.role === "Employer"
                ? "Applications"
                : "My Applications"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}style={{ fontFamily: "sans-serif"}}>
                  Post New Job
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}style={{ fontFamily: "sans-serif"}}>
                  My Jobs
                </Link>
              </li>
          <li>
            <Link to={"/user/myaccount"} onClick={() => setShow(false)}style={{ fontFamily: "sans-serif"}}>
              My Account
            </Link>
          </li>
              <li>
              <button onClick={toggleChatbot} style={{ fontFamily: "sans-serif"}}>
                Chat with Us
        </button>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)}style={{ fontFamily: "sans-serif"}} />
        </div>
      </div>
      <div className="chatbot-container" style={{ display: showChatbot ? "block" : "none",width:"400px", position: "fixed", right: 0, bottom: 0 }}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/F3Wnf9UJg1vewWrdGgVsk"
            title="Chatbot"
            width="400px"
            height="400px"
          ></iframe>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.embeddedChatbotConfig = {
            chatbotId: "F3Wnf9UJg1vewWrdGgVsk",
            domain: "www.chatbase.co"
          };
        `,
            }}
          />
          <script
            src="https://www.chatbase.co/embed.min.js"
            chatbotId="F3Wnf9UJg1vewWrdGgVsk"
            domain="www.chatbase.co"
            defer
          />
        </div>
    </nav>
  );
};

export default Navbar;