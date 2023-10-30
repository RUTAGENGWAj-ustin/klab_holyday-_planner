import React, { useState } from "react";
import axios from "axios";


const Edit_user = ({item}) =>{


const [username,setusername] = useState(item.fullName)
const [email,setEmail] = useState(item.email)
const [phone,setphone] = useState(item.phone)
const [location,setlocation] = useState(item.location)
const [role,setrole] = useState(item.role)

const handleEditClick = (e) => {
  e.preventDefault();
 
  const  update = {
         fullName:username,
         email:email,
         phone:phone,
         location:location,
         role:role,  
  };
  
  axios.put(`https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${item._id}`,
  update).then((response) => {
            alert("continue")
  })
  .catch((error) => {
            alert(error);
  })


};

          return(
<div className="create_tour_dash">
<div className="login-form-container">
                            <form action="" method="put" onSubmit={handleEditClick}>
                              <div className="login-form-title" >
                                        <h1>Edit User</h1>
                                        
                              </div>
                              <div className="login-form-e">
                                        <div><label>User Name</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Example Justin" 
                                        className="login-form-input"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}
                                        />
                              </div>
                              <div className="login-form-e">
                                        <div><label>User Email Address</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="You@example.com" 
                                        className="login-form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                              </div>
                              <div>
                                
                              <div className="login-form-p"><label>Phone Number</label></div>
                                 <input 
                                 type="number" 
                                 placeholder="phone number"   
                                 className="login-form-input"
                                 value={phone}
                                 onChange={(e) => setphone(e.target.value)}
                                 />
                                    </div>
                              <div  className="login-form-p">
                                       <div> <label>Location</label> </div>
                                        <input type="text" 
                                        placeholder="kk 5xx st" 
                                        className="login-form-input"
                                        value={location}
                                        onChange={(e) => setlocation(e.target.value)}
                                        />
                                        <div> <label>Role</label> </div>
                                        <input 
                                        type="text" 
                                        placeholder="your role" 
                                        className="login-form-input"
                                        value={role}
                                        onChange={(e) => setrole(e.target.value)}
                                        />
                             
                                <button className="lig-in-button"><p>Save</p></button>
                              </div>
                              <div className="login-SM">
                                
                              </div>
                              
                              </form>
                              </div>     
</div>

          );
}
export default Edit_user