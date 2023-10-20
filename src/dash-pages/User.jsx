
import React from "react";
import { useState,useEffect } from "react";
import api from "../Api/api";
import Edit_user from "./dash_edit_user";

const User = () =>{
         const [editUser,setEditUser] = useState(false);

         const handleEditClick = () => {
          setEditUser((previsEditMadel) => !previsEditMadel);
         };
         const [userarry,setUserarry] = useState([]);

         useEffect(() => {
          const fetchapi = async () => {
            try {
              const response = await api.get('https://holiday-planner-4lnj.onrender.com/api/v1/auth/users');
              setUserarry(response.data);  
            } catch(err){
              if(err.response){
        console.log(err.response.data.massage);
        console.log(err.response.status);
        console.log(err.response.headers);
              }
              else{
                    console.log("wwe");
                    console.log(userarry);
                console.log(`Error:${err.message}`);
              }
            }
          }
          fetchapi();
         
        },[])


          return(
<div>
          <div className="user-container">
            <h1 className="user-title">Users</h1>
            {editUser && <Edit_user handleEditClick = {handleEditClick}/>}
          <table>
            <thead>
              <tr key="">
                <th>Profille</th>
                <th>Full Names</th>
                <th>Email address</th>
                <th>Phone Number</th>
                <th>Location</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              </thead>
           
            
          
         <tbody>   
{userarry.map((item, index) => ( 
        
          <tr key="">
          <td><img src="/logo.png" alt="" /></td>
          <td>{item.fullName}</td>
          <td>{item.email}</td>
          {/* <div className="pass"><p>{item.password}</p></div> */}
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.role}</td>
          <td><button onClick={handleEditClick}><p>Edit</p></button></td>
           <td><button><p>Delete</p></button></td>
           </tr>
          


)
)}
</tbody>
</table>
</div>
</div>

          );

}
export default User;