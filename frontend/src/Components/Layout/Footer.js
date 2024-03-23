import React, { useContext } from "react";
import { Context } from "../../index";
import { Link } from "react-router-dom";
import {  FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return <>
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
    <div className="logo">
           <img src="/hob.png" style={{height:"100px"}}/> 
        </div>
      <div>&copy; All Rights Reserved By Alok Mattihalli.</div>
      <div>
        <section>Connect with us</section><br/><br/>
        <Link to={"https://www.linkedin.com/in/alok-mattihalli-047854221/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/Alok2001MD"} target="_blank">
         <FaGithub/>
        </Link>
         </div>
     
    </footer>
  </>
};
export default Footer;