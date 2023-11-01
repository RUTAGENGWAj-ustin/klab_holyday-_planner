import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify,Report } from 'notiflix';
import {AiOutlineCloseCircle} from "react-icons/ai"

function Create_tour({handleCreateClick}) {
    
  
            const onSubmit = async (tour) => {
              const formData = new FormData();
              formData.append("destination", tour.destination);
              formData.append("Title", tour.title);
              formData.append("Description", tour.description);
              formData.append("Duration", tour.duration);
              formData.append("GroupSize", tour.groupSize);
              formData.append("Price", tour.price);
              formData.append("Discount", tour.discount);
              formData.append("backdropImage", tour.image[0]);
              formData.append("Gallery", tour.gallery[0]);
              try {
                const res = await axios.post(
                  "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                Report.success(
                  'tour created sussessfully',
                  '"your tour has created." <br/><br/>- you may continue',
                  'Okay',
                  );
                // Notify.success("tour created sussessfully")
                if (res.data) {
                  console.log("Tour created", res.data);
                }
                setTimeout(() =>{
                  window.location.reload();
                },3000 );
                
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
            const {
              register,
              handleSubmit,
              formState: { errors },
            } = useForm();
          
  return (
    <div className="create_tour_dash"  >
      <div className="login-form-container">
                            <form action="" method="POST" onSubmit={handleSubmit(onSubmit)} >
                            <AiOutlineCloseCircle onClick={handleCreateClick} className='edit_cancer'/>
                              <div className="login-form-title" >
                                        <h1>Create tour</h1>
                                        
                              </div>
                              <div className="login-form-e">
                                        <div><label>Title</label></div>
                                        <input 
                                        type="text"
                                     
                                        placeholder="Rwanda" 
                                        className="login-form-input" 
                                        {...register("title",{require: true})}
                                        />
                                       
                              </div>
                              <div className="login-form-e">
                                        <div><label>Destination</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Kigali" 
                                        className="login-form-input"
                                        // value={destination}
                                        // onChange={(e) => setDestination(e.target.value)}
                                        {...register("destination",{require: true})}
                                        />
                                         
                              </div>
                              <div className="login-form-e">
                                        <div><label>Description</label></div>
                                        <input 
                                        type="text" 
                                        placeholder="Tour cump Rwanda" 
                                        className="login-form-input"
                                        // value={Description}
                                        // onChange={(e) => setDescription(e.target.value)}
                                        {...register("description",{require: true})}
                                        />
                                       
                              </div>
                              <div className="login-form-e">
                              <div className="login-form-e">
                                        <div><label>Group Size</label></div>
                                        <input 
                                        type="number"
                                     
                                        placeholder="xxx" 
                                        className="login-form-input" 
                                        // value={GroupSize}
                                        // onChange={(e) => setGroupSize(e.target.value)}
                                        {...register("groupsize",{require: true})}
                                        />
                                       
                              </div>
                                        <div><label>Price</label></div>
                                        <input 
                                        type="number" 
                                        placeholder="xxx rwf"
                                         className="login-form-input"
                                        //  value={Price}
                                        //  onChange={(e) => setPrice(e.target.value)}
                                        {...register("price",{require: true})}
                                         />
                                                                        </div>
                            
                              <div>
                                
                              <div className="login-form-p"><label>backdropImage</label></div>
                                 <input 
                                 type="file"
                                  accept="image/*"
                                  // value={backdropImage}
                                  // onChange={(e) => setBackdropImage(e.target.value)}
                                  {...register("image",{require: true})}
                                    />
                                    </div>
                                    <div>
                                
                                <div className="login-form-p"><label>gallery</label></div>
                                   <input 
                                   type="file"
                                    accept="image/*"
                                    // value={backdropImage}
                                    // onChange={(e) => setBackdropImage(e.target.value)}
                                    {...register("gallery",{require: true})}
                                      />
                                      </div>
                                    
                              <div  className="login-form-p">
                                       <div> <label>Discount</label> </div>
                                        <input 
                                        type="number" 
                                        placeholder="xx.x%" 
                                        className="login-form-input"
                                        // value={Discount}
                                        // onChange={(e) => setDiscount(e.target.value)}
                                        {...register("discount",{require: true})}
                                        />
                                         
                                        <div> <label >Duration</label> </div>
                                        <input 
                                        type="date"
                                         placeholder="xx:xx:xx"
                                          className="login-form-input"
                                          // value={Duration}
                                          // onChange={(e) => setDuration(e.target.value)}
                                          {...register("duration",{require: true})}
                                          />
                                                                       
                                <button 
                                className="lig-in-button"
                                 type="submit" 
                              //    onSubmit={SignUp}
                                 ><p>Create</p></button>
                              </div>
                              <div className="login-SM">
                                
                              </div>
                              
                              </form>
                              </div> 
                              
    </div>
  );
}

export default Create_tour
