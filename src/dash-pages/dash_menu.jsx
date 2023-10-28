
import React from "react";

import {BsSun,BsMoonStars} from "react-icons/bs";

import {AiOutlineSetting} from "react-icons/ai";
import { useStateContext } from "../pages/AppProvider";



const Dash_menu = () =>{

  const {Loged_user} = useStateContext();
          return(
                    <div className="right-dash">
                    <div className="dush-top-menu">
                     <div className="user-names">
                               <h1>Hello <span className="loged_use_menu">{Loged_user?.email}</span></h1>
                     </div>
                    
                     <div className="modes">
                             
                                        <div className="dash-setting">
                                                  <AiOutlineSetting className="settings"/>
                                                  </div> 
                                                  <div className="mode-color">
                                                    <BsSun className="sun"/>
                                                    <div className="mode-text">Dark Mode</div>
                                        <BsMoonStars className="star"/>
                                        </div>
                                        </div>
                    </div>
           </div>
 
          );


}
export default Dash_menu;