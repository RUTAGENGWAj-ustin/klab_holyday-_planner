
import React from "react";
import { useState,useEffect } from "react";
import api from "../Api/api";
import Edit_user from "./dash_edit_user";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useStateContext } from "../pages/AppProvider";
import Notiflix from "notiflix";
import {FaTrash} from "react-icons/fa"
import {BsPencilFill} from "react-icons/bs"


const User = () =>{
   const [UserToDelete, setUserToDelete] = useState(null);
   const [updateUser,setUpdateUser] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
   const {fetchUsersData} =useStateContext()
   

      const [editUser,setEditUser] = useState(false);
      // const [data,setData] = useState([])

      // setData(fetchUsersData)
      //  const { data: tours ,isLoading,isError} = useQuery({
      //   queryKey: ["tours"],
      //   queryFn: async () => {
      //     const res = await Axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/auth/users')
      //     console.log(res)
      //     setData(res.data)
      //     return res.data;
      //   },
      
      // });
      // if (isError) {
      //   return<h1>Sorry there is an Error</h1>
      // }
      // if (isLoading) {
      //   return<h1>loading...</h1>
      // }

      
       

        
        //  const [userarry,setUserarry] = useState([]);

        const handleConfirmDelete = async() => {
          try {
       Notiflix.Confirm.show(
        'Confirm delete tour',
        'Do you agree with me?',
        'Yes',
        'No',
        async() => {
          const res =  await Axios.delete(`https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${UserToDelete._id}`,{
            headers:{
              Authorization:`Bearer ${localStorage.getItem("token")}`
            }
          })
          window.location.reload()
        },
        () => {
        alert('If you say so...');
        },
        {
        },
        );
          } catch (error) {
            console.log(error);
          }
        };
        const handleDeleteClick = (item) => {
          setUserToDelete(item);
          handleConfirmDelete();
          // setShowDeleteConfirm(true);
        };
        const handleCancelDelete = () => {
          setShowDeleteConfirm(false);
        };


        const handleEditClick = (item) => {
          setUpdateUser(item)
          setEditUser((previsEditMadel) => !previsEditMadel);
         };
     


          return(
<div>
          <div className="user-container">
            <h1 className="user-title">Users</h1>
            {editUser && <Edit_user handleEditClick = {handleEditClick} item = {updateUser}/>}
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
{fetchUsersData?.map((item, index) => ( 
        
          <tr key={item._id}>
          <td><img src="/blank-profile-picture.webp" alt="" className="profille_users_blank" /></td>
          <td>{item.fullName}</td>
          <td>{item.email}</td>
          {/* <div className="pass"><p>{item.password}</p></div> */}
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.role}</td>
          <td><button onClick={() => handleEditClick(item)}><BsPencilFill  className="pen_button_icon"/></button></td>
           <td><button onClick={() => handleDeleteClick(item)}><FaTrash className="trash_button_icon"/></button></td>
           </tr>
          


)
)}
{showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {UserToDelete._id}?</p>
          <button onClick={handleConfirmDelete}>OK</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )} 
</tbody>
</table>
</div>
</div>

          );

}
export default User;