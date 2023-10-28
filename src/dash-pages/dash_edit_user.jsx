import React from "react";


const Edit_user = () =>{
          return(
<div className="create_tour_dash">
<div className="login-form-container">
                            <form action="" method="get">
                              <div className="login-form-title" >
                                        <h1>Edit User</h1>
                                        
                              </div>
                              <div className="login-form-e">
                                        <div><label>User Name</label></div>
                                        <input type="text" placeholder="Example Justin" className="login-form-input"/>
                              </div>
                              <div className="login-form-e">
                                        <div><label>User Email Address</label></div>
                                        <input type="text" placeholder="You@example.com" className="login-form-input"/>
                              </div>
                              <div>
                                
                              <div className="login-form-p"><label>Upload profile image</label></div>
                                 <input type="file" accept="image/*"  />
                                    </div>
                              <div  className="login-form-p">
                                       <div> <label>Password</label> </div>
                                        <input type="text" placeholder="Enter 6 character or more" className="login-form-input"/>
                                        <div> <label>Recomfirm Password</label> </div>
                                        <input type="text" placeholder="Enter 6 character or more" className="login-form-input"/>
                             
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