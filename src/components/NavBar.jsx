import React from "react";

import { AiFillVideoCamera, AiFillHome } from "react-icons/ai";

import { VscRepoPull } from "react-icons/vsc";

import { Link, NavLink } from "react-router-dom";
import Header from "./common/Header"

const NavBar = () => {
  return (
    <div className="sidebar">
      
      <Header/>
      
      {/* <ul>
        <li>
          <NavLink  to="/Home">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact">
           <p>Contact</p>
          </NavLink>
        </li>
       
      </ul>
      <div className="side_bottom">
        <div className="mode_d">
      <button className="mode"><img src="sun.svg" alt="" /></button>
      </div>
      <div className="prf_d">
      <img src="profile.jpeg" alt=""  className="profile"/></div>
    </div> */}
    </div>
  );
};

export default NavBar;
