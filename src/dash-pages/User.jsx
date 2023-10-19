
import React from "react";
import { useState } from "react";

const User = () =>{
          const [Delete,setDelete] = useState('');

         const userarry = [
          {
                    id:"1",
                    name:"justin",
                    Email:"just@gmail.com",
                    image:"/card-image/tour-box-image1.jpg",
                    password:"..............",
          },
          {
                    id:"1",
                    name:"justin",
                    Email:"just@gmail.com",
                    image:"/card-image/tour-box-image1.jpg",
                    password:"..............",
          },
          {
                    id:"1",
                    name:"justin",
                    Email:"just@gmail.com",
                    image:"/card-image/tour-box-image1.jpg",
                    password:"..............",
          },
          {
                    id:"1",
                    name:"justin",
                    Email:"just@gmail.com",
                    image:"/card-image/tour-box-image1.jpg",
                    password:"..............",
          },
         ];

          return(
<div>
          <div className="user-container">
{userarry.map((item, index) => ( 
<div className="listofuser">
          <img src={item.image} alt="" />
          <div className="names"><h1>{item.name}</h1></div>
          <div className="Email"><h1>{item.Email}</h1></div>
          <div className="pass"><h1>{item.password}</h1></div>
          <div className="Edit"><button><p>Edit</p></button></div>
           <div className="Edit"> <button><p>Delete</p></button></div>
</div>
))}
</div>
</div>

          );

}
export default User;