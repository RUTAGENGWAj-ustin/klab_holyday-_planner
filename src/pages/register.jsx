import React from "react";

const Register = () =>{

          return(
                    
                        <div>
                          <div className="login-form-container">
                            <form action="" method="get">
                              <div className="login-form-title" >
                                        <h1>Sign up</h1>
                                        
                              </div>
                              <div className="login-form-e">
                                        <div><label>Your Name</label></div>
                                        <input type="text" placeholder="Example Justin" className="login-form-input"/>
                              </div>
                              <div className="login-form-e">
                                        <div><label>Your Email Address</label></div>
                                        <input type="text" placeholder="You@example.com" className="login-form-input"/>
                              </div>
                              <div>
                                
                              <div className="login-form-p"><label>Upload profile image</label></div>
                                 <input type="file" accept="image/*"  />
                                    </div>
                              <div  className="login-form-p">
                                       <div> <label>Password</label> </div>
                                        <input type="text" placeholder="Enter 6 character or more" className="login-form-input"/>
                                        <div> <label>Recomfirm Password</label> </div>
                                        <input type="text" placeholder="Enter 6 character or more" className="login-form-input"/>
                             
                                <button className="lig-in-button"><p>Register</p></button>
                              </div>
                              <div className="login-SM">
                                
                              </div>
                              
                              </form>
                              </div>    
                          
                    </div>
          );
}
export default Register;