import React from "react";
import {BiLogoFacebook} from "react-icons/bi"
import{AiOutlineSearch} from "react-icons/ai"

 import {PiInstagramLogo,PiBirdFill} from  "react-icons/pi"

const Footer = () => {
  return (
    <div>
      <div className="big_container">
        <div className="small_container">
          <div className="lavel-1-a">
            <div className="lavel-2-a">
              <div className="lavel-3-logo">
                <img src="/white-logo.png" alt="logo" />
              </div>
              <div className="lavel-3-text">
                <p><span>Holiday Planners </span>sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
              </div>
              <div className="lavel-3-email">
              <form>
                                    <span class="form-control-span email-wrap">
                                        <input type="email" className="form-input" placeholder="Enter Your Email" required=""/>
                                        <button type="submit" className="sec-btn sm-btn"><span>Submit</span></button>
                                    </span>
                                </form>
              </div>
              <div className="lavel-3-payment">
                <img src="/payment-companies-logo.png" alt="" />
              </div>
            </div>
            <div className="lavel-2-b">
              <div className="lavel-2-b-title">
                <h3>Navigation</h3>
              </div>
              <div className="lavel-2-b-list">
              <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="destination.html">Destination</a>
                                        </li>
                                        <li>
                                            <a href="tour.html">Tour</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact us</a>
                                        </li>
                                    </ul>
              </div>
            </div>
            <div className="lavel-2-c">
              <div className="lavel-2-c-title">
                <h3>Need Help ?</h3>
              </div>
              <div className="lavel-2-c-list">
              <ul>
                                        <li>
                                            <span className="contact-label">Call Us</span>
                                            <a href="tel:1234567890">+123 456 7890</a>
                                        </li>
                                        <li>
                                            <span className="contact-label">Email for Us</span>
                                            <a href="mailto:holidayplanners@gmail.com">holidayplanners@gmail.com</a>
                                        </li>
                                        <li>
                                            <span className="contact-label">Location</span>
                                            <a href="javascript:void(0);">Main Street, Victoria 8007.</a>
                                        </li>
                                        <li className="social-icons">
                                            <span className="contact-label">Follow us</span>
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);" title="Follow us on Facebook">
                                                        <span className="icon"><BiLogoFacebook className="icon"/></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" title="Follow us on Instagram">
                                                        <span className="icon"><PiInstagramLogo className="icon"/></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" title="Follow us on Twitter">
                                                        <span className="icon"><PiBirdFill className="icon"/></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="lavel-1-b">
          <div className="lavel-1-b-a">
                            <p className="copyright-text text-lg-left">Copyright © 2021 <a href="https://themeforest.net/user/geekcodelab" target="_blank">Geek Code Lab</a>. All Rights Reserved.</p>
           </div>
           <div className="copyright-link">
                                <ul>
                                    <li><a href="javascript:void(0);" title="Privacy Policy">Privacy Policy</a></li>
                                    <li><a href="javascript:void(0);" title="Terms of Use">Terms of Use</a></li>
                                    <li><a href="javascript:void(0);" title="Cookie Policy">Cookie Policy</a></li>
                                </ul>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;