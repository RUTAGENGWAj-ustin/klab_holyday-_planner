
import React from "react";

import {BsSun,BsMoonStars} from "react-icons/bs";

import {AiOutlineSetting} from "react-icons/ai";



const Dash_menu = () =>{
          return(
                    <div className="right-dash">
                    <div className="dush-top-menu">
                     <div className="user-names">
                               <h1>Hello Hussein</h1>
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