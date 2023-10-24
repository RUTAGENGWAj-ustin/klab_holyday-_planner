import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const Login = () =>{

  const [email,setEmail] = useState()
const [password,setPassword] = useState()

  const log_in = async (e)=> {
    e.preventDefault();



const validateForm = {}

if (!email.trim()) {
  validateForm.email="Email required"

}
  if (!password.trim()) {
    validateForm.password="password required"
    
  }

  setError(validateForm)
  if (Object.keys(validateForm).length === 0) {
    // alert("form is valid")
    const data = {email,  password}
    console.log(data)

    try {
      axios.post('https://holiday-planner-4lnj.onrender.com/api/v1/auth/login',data).then(()=>{
     
       Navigate("/dashboard")
     });
 
   } catch(err){
     if(err.response){
console.log(err.response.data.massage);
console.log(err.response.status);
console.log(err.response.headers);
     }
     else{
           console.log(posts);
       console.log(`Error:${err.message}`);
     }
   }
  }
  }

          return(
                    <div>
                          <div className="login-form-container ">
                            <form action="" method="POST" onSubmit={log_in}>
                              <div className="login-form-title"  >
                                        <h1>Login</h1>
                                        <p>Don't you have an account yey <span onClick={()=> {window.location.href ='Register'}}  className="xxxxxx">Sign Up</span></p>
                              </div>
                              <div className="login-form-e">
                                        <div><label>Email Address</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="You@example.com" 
                                        className="login-form-input" 
                                        required
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        />
                              </div>
                              <div  className="login-form-p">
                                       <div> <label>Password</label> <span className="xxxxxx">Forgot Password?</span></div>
                                        <input 
                                        type="text" 
                                        placeholder="Enter 6 character or more" 
                                        className="login-form-input"  
                                         required
                                         value={password}
                                         onChange={(e)=> setPassword(e.target.value)}
                                         />
                              </div>
                              <div  className="login-form-r">
                              <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label>Remember Me</label>
                                       
                              </div>
                              <div>
                                <button className="lig-in-button"  >
                                  <p>Login</p>
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