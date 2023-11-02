
import React from "react";

const  Stutus_loged =() => {
          let userData = JSON.parse(localStorage.getItem("data"));
         let token = userData?.access_token;
         let Email = userData?.user.email;
         let Xloged = userData?.user.role;
         console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",Xloged);
         
         
         function Logout() {
            localStorage.removeItem("data")
            window.location.href="/";
      }
   
 
         if ( Xloged ==undefined) {
            return(<a href="/login" className="sec-btn" title="Reserve"><span>Login</span></a>) 
         }else{
         return( <div  className="sec-btn" onClick={Logout}><span>Logout</span></div>
     
         )}
        }
        export default Stutus_loged;