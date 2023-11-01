import React, { useState } from "react";

import {BsTelephoneFill} from "react-icons/bs"
import {FaRegEnvelope,FaRegCircle} from "react-icons/fa"
import {BiLogoFacebook} from "react-icons/bi"
import{AiOutlineSearch} from "react-icons/ai"
import Menu from "./menu";
import Stutus_loged from "./loged_stutus";
 import {PiInstagramLogo,PiBirdFill} from  "react-icons/pi";

 

const Header = () =>{
const [model, setModel] = useState(false);




    // let userData = JSON.parse(localStorage.getItem("data"));
    // let token = userData?.access_token;
    // let Email = userData?.user.email;
    // let Xloged = userData?.user.role;

    // if (Xloged !="") {
    //     setloged(<a href="/login" className="sec-btn" title="Reserve"><span>Login</span></a>)
       
    // }
    // else{
    //    setloged('<a href="/login" className="sec-btn" title="Reserve"><span>Logout</span></a>')
    // }
  


   
          return(
                    <div >
                        {model && <Menu/>}
                         <div className="header1">
                                    <div  className="header1-col-1">
                                        <ul>
                                                  <li className="we">
                                                  <a href="#"> <span className="icon"><FaRegEnvelope className="icon"/></span> <span className="text">holidayplanners@gmail.com</span></a>  
                                                  </li>
                                                  <li className="wq">
                                                   <a href="#"> <span className="icon"><BsTelephoneFill className="icon"/></span> <span className="text">+123 456 7890</span>  </a>     
                                                  </li>
                                        </ul>
                                    </div>
                                   <div></div> 

                                    <div className="social">
                                    <ul className="header-social">
                            <li>
                                <a href="#" title="Follow us on Facebook">
                                    <span className="icon"><BiLogoFacebook className="icon"/></span>
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
                               <a href="#" title="Travel &amp; Tour"><img className="logoheader2" src="logo.png" alt="Logo"/></a>
                               </div>
                               <div className="header-munu">
                                   <div ><Stutus_loged/></div>
                                   
                                   <div className="search">
                                       <span className="search-icon" ><AiOutlineSearch className="search-icon-1" /></span>
                                   </div>
                                   <div><button type="button" className="navigation-btn" onClick={() =>{
                                    setModel(!model);
                                   }}>
                                        <span className="first"></span>
                                        <span className="second"></span>
                                        <span className="third"></span>
                                    </button></div>
                                    
                               </div>
                         </div>
                    </div>
          );
}
export default Header;