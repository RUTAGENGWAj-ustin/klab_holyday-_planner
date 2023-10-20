import React, { useState,useEffect } from "react";
import api from "../Api/api";

const Register = () =>{


  // const [posts,setPosts] = useState([]);


  // useEffect(() => {
  //   const fetchapi = async () => {
  //     try {
  //       const response = await api.post('https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup ');
  //       setPosts(response.data);  
  //     } catch(err){
  //       if(err.response){
  // console.log(err.response.data.massage);
  // console.log(err.response.status);
  // console.log(err.response.headers);
  //       }
  //       else{
  //             console.log(posts);
  //         console.log(`Error:${err.message}`);
  //       }
  //     }
  //   }
  //   fetchapi();
  //   console.log("wwe");
  //   console.log(posts);
  
  // },[]);

const[fullName,setFullname] = useState('');
const[email,setEmail] = useState('');
const [phone,setPhone] = useState('')
const [location,setLocation] = useState('');
const [role,setRole] = useState('');
const [password,setPassword] = useState('');
const [confirmpassword,setConfirmpassword] = useState('');

const SignUp = (e)=> {
  e.preventDefault();
  console.log("qwedrftgfdssdfghgfdsasdrftgfds")
  console.log(fullName,email,password)
  
}


          return(
                    
                        <div>
                          <div className="login-form-container">
                            <form action="" method="get">
                              <div className="login-form-title" >
                                        <h1>Sign up</h1>
                                        
                              </div>
                              <div className="login-form-e">
                                        <div><label>Your Full Name</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Example Justin" 
                                        className="login-form-input" 
                                        value={fullName}
                                        onChange={(e) => setFullname(e.target.value)}
                                        />
                              </div>
                              <div className="login-form-e">
                                        <div><label>Your Email Address</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="You@example.com" 
                                        className="login-form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                              </div>
                              <div className="login-form-e">
                                        <div><label>Your Phone number</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="07xxxxxxxx" 
                                        className="login-form-input"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        />
                              </div>
                              <div className="login-form-e">
                                        <div><label>Location</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="kigali"
                                         className="login-form-input"
                                         value={location}
                                         onChange={(e) => setLocation(e.target.value)}
                                         />
                              </div>
                              <div className="login-form-e">
                                        <div><label>Role</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Progect Manager" 
                                        className="login-form-input"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        />
                              </div>
                              <div>
                                
                              <div className="login-form-p"><label>Upload profile image</label></div>
                                 <input type="file" accept="image/*"  />
                                    </div>
                              <div  className="login-form-p">
                                       <div> <label>Password</label> </div>
                                        <input 
                                        type="password" 
                                        placeholder="Enter 6 character or more" 
                                        className="login-form-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div> <label >Recomfirm Password</label> </div>
                                        <input 
                                        type="password"
                                         placeholder="Enter 6 character or more"
                                          className="login-form-input"
                                          value={confirmpassword}
                                          onChange={(e) => setConfirmpassword(e.target.value)}
                                          />
                             
                                <button 
                                className="lig-in-button"
                                 type="submit" 
                                 onSubmit={SignUp}
                                 ><p>Register</p></button>
                              </div>
                              <div className="login-SM">
                                
                              </div>
                              
                              </form>
                              </div>    
                          
                    </div>
          );
}
export default Register;