import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { Loading, Notify } from 'notiflix';
import {AiOutlineCloseCircle} from "react-icons/ai"



function Edit_tour({handleEditClick,item}) {


          const [title,setTittle] = useState(item.Title)
          const [Destination,setDestination] = useState(item.destination)
          const [Description,setDescription] = useState(item.Description)
          const [groupSize,setGroupSize] = useState(item.GroupSize)
          const [price,setPrice] = useState(item.Price)
          const [backdropImage,setBackdropImage] = useState(item.backdropImage)
          const [gallery,setGallery] = useState(item.gallery)
          const [Discount,setDiscount] = useState(item.Discount)
          const [Duration,setDuration] = useState(item.Duration)

          


            const handleEEditClick = (e) => {
                    e.preventDefault();
                    
                   
                    const  update = {
                            Title:title,
                            destination:Destination,
                            Description:Description,
                            GroupSize:groupSize,
                            Price:price,
                            Discount:Discount,
                            Duration:Duration,  
                    };
              

                    axios.put(`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${item._id}`,
                    update).then((response) => {
                      Notify.success("tour edited sussessfully")
                      

                    })
                    
                    .catch((error) => {
                              alert(error);
                    })


                  };
          
  return (
    <div className="create_tour_dash" >
      <div className="login-form-container">
          
                            <form action="" method="PUT" onSubmit={handleEEditClick} >
                            <div><AiOutlineCloseCircle onClick={handleEditClick} className='edit_cancer'/></div>
                              <div className="login-form-title" >
                                        <h1  >Edit tour</h1>
                                        
                              </div>
                              <div className="login-form-e">
                                        <div><label>Title</label></div>
                                        <input 
                                        type="text"
                                     
                                        placeholder="Rwanda" 
                                        className="login-form-input" 
                                        value={title}
                                        onChange={(e) => setTittle(e.target.value)}
                                        />
                                       
                              </div>
                              <div className="login-form-e">
                                        <div><label>Destination</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Kigali" 
                                        className="login-form-input"
                                         value={Destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                       
                                        />
                                         
                              </div>
                              <div className="login-form-e">
                                        <div><label>Description</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Tour cump Rwanda" 
                                        className="login-form-input"
                                        value={Description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        
                                        />
                                       
                              </div>
                              <div className="login-form-e">
                              <div className="login-form-e">
                                        <div><label>Group Size</label></div>
                                        <input 
                                        type="number"
                                     
                                        placeholder="xxx" 
                                        className="login-form-input" 
                                        value={groupSize}
                                        onChange={(e) => setGroupSize(e.target.value)}
                                        />
                                       
                              </div>
                                        <div><label>Price</label></div>
                                        <input 
                                        type="number" 
                                        placeholder="xxx rwf"
                                         className="login-form-input"
                                         value={price}
                                         onChange={(e) => setPrice(e.target.value)}
                                        
                                         />
                                                                        </div>
                            
                              <div>
                                
                              <div className="login-form-p"><label>backdropImage</label></div>
                                 <input 
                                 type="file"
                                  accept="image/*"
                              //     value={backdropImage}
                                  onChange={(e) => setBackdropImage(e.target.value)}
                                  
                                    />
                                    </div>
                                    <div>
                                
                                <div className="login-form-p"><label>gallery</label></div>
                                   <input 
                                   type="file"
                                    accept="image/*"
                              //       value={gallery}
                                    onChange={(e) => setGallery(e.target.value)}
                                    
                                      />
                                      </div>
                                    
                              <div  className="login-form-p">
                                       <div> <label>Discount</label> </div>
                                        <input 
                                        type="number" 
                                        placeholder="xx.x%" 
                                        className="login-form-input"
                                        value={Discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                      
                                        />
                                         
                                        <div> <label >Duration</label> </div>
                                        <input 
                                        type=""
                                         placeholder="xx:xx:xx"
                                          className="login-form-input"
                                          value={Duration}
                                          onChange={(e) => setDuration(e.target.value)}
                                        
                                          />
                                                                       
                                <button 
                                className="lig-in-button"
                                 type="submit" 
                              //    onSubmit={SignUp}
                                 ><p>Save</p></button>
                              </div>
                              {/* <button 
                                className="lig-in-button"
                                 type="submit" 
                              onClick={handleEditClick}
                                 ><p>cance</p></button> */}
                              <div className="login-SM">
                                
                              </div>
                              
                              </form>
                              </div> 
                              
    </div>
  );
}

export default Edit_tour
