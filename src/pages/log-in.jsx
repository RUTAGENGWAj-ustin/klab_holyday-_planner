import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { AppContext } from "./AppProvider";
import { useStateContext } from "./AppProvider";
import { Notify } from "notiflix";


const Login = () =>{


const {Loged_user} = useStateContext()
const [email,setEmail] = useState()
const [password,setPassword] = useState()
const [error,setError] = useState({})

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
    const Data = {email,  password}
    console.log(Data)

    // const {data, isLoading,isError} = useQuery({
    //   queryKey: ["log"],
    //   queryFn: async () => {
    //     const res = await Axios.post('https://holiday-planner-4lnj.onrender.com/api/v1/auth/login',Data).then(()=>{
     
    //           alert("continue")
    //           window.location.href ='dashboard'
    //          });
       
    //   },
    
    // });
    // if (isError) {
    //   return<h1>Sorry there is an Error</h1>
    // }
    // if (isLoading) {
    //   return<h1>loading...</h1>
    // }
    
    try {
      const r = await axios.post('https://holiday-planner-4lnj.onrender.com/api/v1/auth/login',Data)

      console.log("user:",r.data)
      localStorage.setItem("data",JSON.stringify((r.data)))
   
     
      // alert("continue")
      Notify.success("login sussessfully")
      // window.location.href ='dashboard'
      // console.log(r)
      // localStorage.setItem(r)
     console.log("Loged_user:",Loged_user)



     let userData = JSON.parse(localStorage.getItem("data"));
     let token = userData?.access_token;
     let Email = userData?.user.email;
     let loged = userData?.user.role;
      if (loged =="admin") {
         window.location.href ='dashboard'
      // console.log(res)
      // localStorage.setItem(res)
        console.log("loged user is admin");
      }else {
        window.location.href ='/'
        console.log("loged user is not admin");
      }
 
   } 
   
   catch(err){
     console.log(err);

     if(err.response.status == 404){
      Notify.success("Incorrect email or password")
   
     }
     if(err.response.status == 401){
      Notify.success("Incorrect email or password")
   
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
                                         {error.fullName && <span className="error-validation">{error.fullName}</span>}
                              </div>
                              <div  className="login-form-p">
                                       <div> <label>Password</label> <span className="xxxxxx">Forgot Password?</span></div>
                                        <input 
                                        type="password" 
                                        placeholder="Enter 6 character or more" 
                                        className="login-form-input"  
                                         required
                                         value={password}
                                         onChange={(e)=> setPassword(e.target.value)}
                                         />
                                          {error.password && <span className="error-validation">{error.password}</span>}
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