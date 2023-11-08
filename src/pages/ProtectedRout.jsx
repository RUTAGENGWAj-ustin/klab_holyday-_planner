import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRout({children,user}) {
                  
                  let userData = JSON.parse(localStorage.getItem("data"));
                  let loged = userData?.user.role;
                  user = loged
                    if (user =="admin") {
                                    return children;
                                  
                  }else{
                      return <Navigate to='/login' />;                
                  }
 
}

export default ProtectedRout
