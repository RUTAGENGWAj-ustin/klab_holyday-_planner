import React from "react";
import { ImWindows } from "react-icons/im";
import { BiMap } from "react-icons/bi";
import {GiCommercialAirplane} from "react-icons/gi";
import {MdOutlineUpcoming} from "react-icons/md";
import {LiaUmbrellaBeachSolid} from "react-icons/lia";
import {LuCalendarDays} from "react-icons/lu";
import {BsFillChatRightDotsFill,BsSun,BsMoonStars,BsFillPersonFill} from "react-icons/bs";
import {GoDotFill} from "react-icons/go";
import {TbLogout} from "react-icons/tb";
import {AiOutlineSetting} from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link ,NavLink} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tour_List from "../pages/Tour_List";
import User from "./User";
// import AppProvider from "../pages/AppProvider";
import { useStateContext } from "../pages/AppProvider";

const Dash_nav = () =>{

      const {Loged_user} = useStateContext();
      console.log("====================", Loged_user);
          return(
<div>
<div className="left-dash">
                    <div  className="profile">
                             <div className="prfile-image">
                              <img src="/plae.jpg" alt="" />
                             </div>
                             <div className="profile-name">
                                       <h1>{Loged_user?.email}</h1>
                                       <p>{Loged_user?.role}</p>
                             </div>
                    </div>
                    <div className="dash-nav">
                                 <div className="inner-dash-nav">
                                       <ul>
                                                 <li><NavLink className="NavLink" to="Dashboard"><div className="dash-nav-icon"><ImWindows className="dash-nav-icon"/></div><p>Dashboard</p></NavLink></li>
                                                 <li><NavLink className="NavLink" to="User"><div className="dash-nav-icon"><BsFillPersonFill className="dash-nav-icon"/></div><p>User</p></NavLink></li>
                                                 <li><NavLink className="NavLink" to="Dash_tour"><div className="dash-nav-icon"><GiCommercialAirplane className="dash-nav-icon"/></div><p>Tours</p></NavLink></li>
                                                 <li><div className="dash-nav-icon"><MdOutlineUpcoming className="dash-nav-icon"/></div><p>Upcoming</p></li>
                                                 <li><div className="dash-nav-icon"><LiaUmbrellaBeachSolid className="dash-nav-icon"/></div><p>Camps</p></li>
                                                 <li><div className="dash-nav-icon"><LuCalendarDays className="dash-nav-icon"/></div><p>Calender</p></li>
                                                 <li><div className="dash-nav-icon"><BsFillChatRightDotsFill className="dash-nav-icon"/></div><p>Chat</p></li>
                                       </ul>
                                       
                                       </div>                      
                    </div>
                    <div className="dash-popular-place">
                             <div className="dash-popular-place-title">
                                       <h1>Popular Place</h1>
                             </div>
                             <div className="dash-popular-place-list">
                                       <ul>
                                                 <li><div className="places-icon"><GoDotFill className="icon-o"/></div> <div className="popular-lists"><span>Oslo</span>/Norway</div></li>
                                                 <li><div className="places-icon"><GoDotFill className="icon-m"/></div> <div className="popular-lists"> <span>Muai</span>/Hawaii</div></li>
                                       </ul>
                             </div>
                    </div>
                    <div className="dash-log-out">
                    <div className="places-icon"><TbLogout className="Log-out-icon" onClick={()=> {window.location.href ='/'}}/></div><p onClick={()=> {window.location.href ='/'}}>Logout</p>
                    </div>
                   </div>       
</div>
          );
}
export default Dash_nav;