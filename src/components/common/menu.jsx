
import React from "react";

import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTwitterCircle } from "react-icons/ai";
import {AiOutlineCloseCircle}  from 'react-icons/ai'
import { Link } from "react-router-dom";


const Menu = () =>{
          return(


            <>
            <section className="holder">
              <div className="navpost">
                <div className="nav1">
                    <div className="menu-nav1">
                         <div className="pad">
                           <img src="white-logo.png" alt="log" />
                            </div>
                             <div className="">
                                 <AiOutlineCloseCircle className="close_icon" />
                              </div>
                  </div>
                  <div className="allpages">
                    <div className="all">
                      <ul>
                        <li className="li">
                          <a href="/Home">Home</a>
                        </li>
                        <li className="li">
                          {" "}
                          <a href="Tour_list">Tours</a>
                        </li>
                        <li className="li">
                          <a href="contact">Contact us</a>
                        </li>
                        <li className="li">
                          <a href="/login" className="l4">
                            Login
                          </a>
                        </li>
                        <li className="li"> <a href="/register" className="l4">Register  </a></li>
                      </ul>
                    </div>
                    <div className="so">
                      <div className="Menu-social">
                        <ul>
                        <li><BsFacebook className="so3" /></li>
                        <li><PiInstagramLogoFill className="so3" /></li>
                        <li> <AiFillTwitterCircle className="so3" /></li>
                        </ul>
                      </div>
                      
                    </div>
                   
                  </div>
                 
                </div>
                <img src="logo-icon-white.svg" className="Menu-logo-icon-white" />
              </div>
              
            </section>
          </>
                                    );
                              }
          export default Menu;



