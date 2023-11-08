import React from "react";
import Dash_menu from "./dash_menu";
import Dash_nav from "./dash_nav";
import { NavLink, Link, Outlet } from "react-router-dom";
const Layout1 = (user) => {
  let userData = JSON.parse(localStorage.getItem("data"));
   user = userData?.user.role;
  
          return (
            <div className="layout">
               <Dash_nav/>
              <div className="np">
              < Dash_menu/>
              <div className="outlet">
              <Outlet  className=" outlet"/>
              </div>
              </div>
           
            </div>
          );
        };
        
        export default Layout1;