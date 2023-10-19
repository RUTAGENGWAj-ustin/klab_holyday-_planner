import React, { useState } from "react";

import {BsTelephoneFill} from "react-icons/bs"
import {FaRegEnvelope,FaRegCircle} from "react-icons/fa"
import {BiLogoFacebook} from "react-icons/bi"
import{AiOutlineSearch} from "react-icons/ai"
import Menu from "./menu";

 import {PiInstagramLogo,PiBirdFill} from  "react-icons/pi"



const Header = () =>{


    const [model, setModel] = useState(false);
          return(
                    <div >
                        {model && <Menu/>}
                         <div className="header1">
                                    <div  className="header1-col-1">
                                        <ul>
                                                  <li className="we">
                                                  <a href="#"> <span className="icon"><FaRegEnvelope className="icon"/></span> <span class="text">holidayplanners@gmail.com</span></a>  
                                                  </li>
                                                  <li className="wq">
                                                   <a href="#"> <span className="icon"><BsTelephoneFill className="icon"/></span> <span class="text">+123 456 7890</span>  </a>     
                                                  </li>
                                        </ul>
                                    </div>

                                    <div className="social">
                                    <ul class="header-social">
                            <li>
                                <a href="#" title="Follow us on Facebook">
                                    <span class="icon"><BiLogoFacebook className="icon"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Follow us on Instagram" className="instgr">
                                    <span className="icon"><PiInstagramLogo className="icon"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Follow us on Twitter">
                                    <span className="icon"><PiBirdFill className="icon"/></span>
                                </a>
                            </li>
                        </ul>
                                    </div>
                         </div>
                         <div className="header-2">
                               <div>
                               <a href="#" title="Travel &amp; Tour"><img src="logo.png" alt="Logo"/></a>
                               </div>
                               <div className="header-munu">
                                   <div><a href="/login" className="sec-btn" title="Reserve"><span>Login</span></a></div>  
                                   <div className="search">
                                       <span className="search-icon"><AiOutlineSearch className="search-icon-1"/></span>
                                   </div>
                                   <div><button type="button" class="navigation-btn" onClick={() =>{
                                    setModel(!model);
                                   }}>
                                        <span class="first"></span>
                                        <span class="second"></span>
                                        <span class="third"></span>
                                    </button></div>
                               </div>
                         </div>
                    </div>
          );
}
export default Header;