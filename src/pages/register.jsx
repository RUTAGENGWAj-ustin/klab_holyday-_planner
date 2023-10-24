import React, { useState,useEffect } from "react";
import api from "../Api/api";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () =>{


  const [posts,setPosts] = useState([]);
  const Navigate = useNavigate()


  

const[fullName,setFullname] = useState('');
const[email,setEmail] = useState('');
const [phone,setPhone] = useState('')
const [location,setLocation] = useState('');
const [role,setRole] = useState('');
const [password,setPassword] = useState('');
const [confirmpassword,setConfirmpassword] = useState('');
const [error,setError] = useState({})


const SignUp = async (e)=> {
  e.preventDefault();
  const validateForm = {}
  if (!fullName.trim()) {
    validateForm.fullName="full Name required"
    
  }
  if (!email.trim()) {
    validateForm.email="Email required"
    
  }else if(!/\S+@\S+\.\S+/.test(email)){
  validateForm.email = "email is not valid"
  }
  if (!phone.trim()) {
    validateForm.phone="phone required"
    
  }
  if (!location.trim()) {
    validateForm.location="location required"
    
  } 
  // if (!role.trim()) {
  //   validateForm.role="role required"
    
  // }
  if (!password.trim()) {
    validateForm.password="password required"
    
  }else if(password.length < 6){
    validateForm.password = "password should be at least 6 character "
  }
  if (confirmpassword !== password) {
    validateForm.confirmpassword = "password not matched"
  }

  setError(validateForm)
  if (Object.keys(validateForm).length === 0) {
    // alert("form is valid")
    const data = {fullName,email,  password,  phone,  location,  role}



      try {
         axios.post('https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup',data).then(()=>{
        
          alert("signup sus")
          window.location.href ='login'
        });
    
      } catch(err){
        if(err.response){
  console.log(err.response.data.massage);
  console.log(err.response.status);
  console.log(err.response.headers);
        }
        else{
              console.log(data);
          console.log(`Error:${err.message}`);
        }
      }

   console.log(data)

    
  }
  
  // console.log("qwedrftgfdssdfghgfdsasdrftgfds")
  // console.log(fullName,email,password)
  // alert(fullName)
  
}


          return(
                    
                        <div>
                          <div className="login-form-container">
                            <form action="" method="POST"  onSubmit={SignUp}>
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
                                        {error.fullName && <span className="error-validation">{error.fullName}</span>}
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
                                         {error.email && <span className="error-validation">{error.email}</span>}
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
                                         {error.phone && <span className="error-validation">{error.phone}</span>}
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
                                          {error.location && <span className="error-validation">{error.location}</span>}
                              </div>
                              {/* <div className="login-form-e">
                                        <div><label>Role</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Progect Manager" 
                                        className="login-form-input"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        />
                                         {error.role && <span className="error-validation">{error.role}</span>}
                              </div> */}
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
                                         {error.password && <span className="error-validation">{error.password}</span>}
                                        <div> <label >Recomfirm Password</label> </div>
                                        <input 
                                        type="password"
                                         placeholder="Enter 6 character or more"
                                          className="login-form-input"
                                          value={confirmpassword}
                                          onChange={(e) => setConfirmpassword(e.target.value)}
                                          />
                                           {error.confirmpassword && <span className="error-validation">{error.confirmpassword}</span>}
                             
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