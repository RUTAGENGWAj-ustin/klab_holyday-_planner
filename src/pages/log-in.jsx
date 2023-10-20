import React from "react";
import { Link } from "react-router-dom";



const Login = () =>{
          return(
                    <div>
                          <div className="login-form-container">
                            <form action="" method="get">
                              <div className="login-form-title" >
                                        <h1>Login</h1>
                                        <p>Don't you have an account yey <span onClick={()=> {window.location.href ='Register'}}  className="xxxxxx">Sign Up</span></p>
                              </div>
                              <div className="login-form-e">
                                        <div><label>Email Address</label></div>
                                        <input type="text" placeholder="You@example.com" className="login-form-input" required/>
                              </div>
                              <div  className="login-form-p">
                                       <div> <label>Password</label> <span className="xxxxxx">Forgot Password?</span></div>
                                        <input type="text" placeholder="Enter 6 character or more" className="login-form-input"   required/>
                              </div>
                              <div  className="login-form-r">
                              <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label>Remember Me</label>
                                       
                              </div>
                              <div>
                                <button className="lig-in-button"  onClick={()=> {window.location.href ='/Dashboard'}}>
                                  <Link to= '/dashboard' className="lixxxxx">Login</Link> 
                                  </button>
                              </div>
                              <div className="login-SM">
                                <ul className="login-SM-list">
                                    <li>Google</li>
                                    <li>Facebook</li>
                                </ul>
                              </div>
                              
                              </form>
                              </div>    
                    </div>
          );
}
export default Login;