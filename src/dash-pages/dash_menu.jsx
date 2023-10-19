
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
                              <div> 
                                        <div className="dash-setting">
                                                  <AiOutlineSetting/>
                                                  </div> 
                                        <BsSun className="sun"/>Dark Mode</div>
                                        <BsMoonStars className="star"/>
                                        </div>
                    </div>
           </div>
 
          );


}
export default Dash_menu;