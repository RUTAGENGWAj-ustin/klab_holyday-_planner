import React from "react";
import { useParams } from "react-router-dom";
import Tours from "./list-of-all-tour-arr";
import {BsFillPersonFill} from "react-icons/bs";
import {AiTwotonePhone} from "react-icons/ai";
import {FaEnvelope,FaBook} from"react-icons/fa";
import { useState,useEffect } from "react";

import api from "../Api/api";
import  Axios  from "axios";

const Single_tour = () =>{


   const [posts,setPosts] = useState([]);
   const {Tid} = useParams();


  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await Axios.get(`https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=Title&value=${Tid}`);
        setPosts(response.data);  
      } catch(err){
        if(err.response){
  console.log(err.response.data.massage);
  console.log(err.response.status);
  console.log(err.response.headers);
        }
        else{
              console.log(posts);
          console.log(`Error:${err.message}`);
        }
      }
    }
    fetchapi();
    
    console.log("wwe");
    console.log(posts);
  
  },[])
       

       

        //  const product = posts.find((product) => product._id ===Tid);
        //   const {Description,GroupSize,Seats,Title,backdropImage,destination,fromMonth,__v,_id,} = product;
        //   console.log("product")
        //   console.log(product)

            return(

                    <div>
 
                    <div className="contact">
                    <section className="main-banner inner-banner overlay back-image"  
                    style={{
        backgroundImage: `url(${posts.backdropImage})`,
        backgroundSize: 'cover', // Adjust the background image size as needed
              
      }}>
        <div className="sec-wp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-content wow fadeup-animation" >
                            <h1 className="h1-title">{posts.Title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section className="main-contact-sec pb-70">
       <div className="big-contact">
          <div className="small-contact">
               <div className="left-side">
                    <div className="form">
                      <form action="">
                         <div className="top-form">
                              <div className="top-form-left">
                                      <div className="in">
                                        {/* <span className="icon"><BsFillPersonFill/></span>
                                        <input type="text" placeholder="Full Name *" required="" class="form-input"/> */}

Rwanda, officially the Republic of Rwanda, is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. Located a few degrees south of the Equator, Rwanda is bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo
                                      </div>  
                                      <div className="in">
                                      Rwanda, officially the Republic of Rwanda, is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. Located a few degrees south of the Equator, Rwanda is bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo
                                      </div>  
                              </div>
                              <div className="top-form-right">
                              Rwanda, officially the Republic of Rwanda, is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. Located a few degrees south of the Equator, Rwanda is bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo 
                              </div>
                              
                         </div>
                         <div className="bottom-form">
                         Rwanda, officially the Republic of Rwanda, is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. Located a few degrees south of the Equator, Rwanda is bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo
                         Rwanda, officially the Republic of Rwanda, is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. Located a few degrees south of the Equator, Rwanda is bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo
                         </div>
                      </form>
                      </div>
               </div>
               <div className="right-side">
               <form action="" className="booking-form sinle_tour">
                         <div className="top-form x">
                         <div class="line-title">
                                <h4 class="h4-title">Book This Tour</h4>
                            </div>
                                      <div className="in">
                                        <span className="icon"><BsFillPersonFill/></span>
                                        <input type="text" placeholder="Full Name *" required="" class="form-input"/>
                                      </div>  
                                      <div className="in">
                                        <span className="icon"><AiTwotonePhone/></span>
                                        <input type="text" placeholder="Email *" required="" class="form-input"/>
                                      </div>  
                                      <div className="in">
                                        <span className="icon"><AiTwotonePhone/></span>
                                        <input type="text" placeholder="Confirm Email *" required="" class="form-input"/>
                                      </div>  
                                      <div className="in">
                                        <span className="icon"><AiTwotonePhone/></span>
                                        <input type="text" placeholder="Phone *" required="" class="form-input"/>
                                      </div>  
                              
                                          
                              <div className="in">
                                        <span className="icon"><FaEnvelope/></span>
                                        <input type="date" placeholder="mm/dd/yyyy *" required="" class="form-input"/>
                                      </div>  
                                      <div className="in">
                                        <span className="icon"><FaBook/></span>
                                        <input type="text" placeholder="Number of Tickets *" required="" class="form-input"/>
                                      </div>  
                                      <div className="in checkbox">
                                        <input type="checkbox" placeholder=" " required="" class="form-input"/>
                                            <p>Check Availability</p> 
                                      </div>  
                                      
                           
                              
                         </div>
                         <div className="bottom-form">
                              <textarea name="massege" id="" cols="30" rows="10" placeholder="Massage"></textarea>
                              <button className="form-contact-botton"><span>Book now</span></button>
                         </div>
                      </form>
                    <div className="right-side-top x">
               <div className="line-title">
                                <h4 class="h4-title">Why Book With Us?</h4>
                            </div>
                            <ul class="book-with-list">
                                <li>Best Price Guarantee</li>
                                <li>Customer care available 24/7</li>
                                <li>Free Travel Insureance</li>
                                <li>Hand-picked Tours &amp; Activities</li>
                            </ul>
               </div>
               <div className="right-side-bottom">
               
                            <div class="line-title">
                                <h4 class="h4-title">Get a Question?</h4>
                            </div>
                            <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                            <ul class="gaq-list-item">
                                <li>
                                    <a href="mailto:holidayplanners@gmail.com" title="holidayplanners@gmail.com">
                                        <i class="fas fa-envelope" aria-hidden="true"></i> holidayplanners@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1234567890" title="+123 456 7890">
                                        <i class="fas fa-phone-alt" aria-hidden="true"></i> +123 456 7890
                                    </a>
                                </li>
                            </ul>
                       
               </div>
               </div>
          </div>
       </div>
    </section>
    </div>
    
                              
                              {/* <div className="tour-card single">
                              <div className="card-img-single">
                                        <img src={image} alt="" />
                              </div>
                              <div className="card-name-single">
                                        <h1>{name}</h1>
                              </div>
                              <div className="all-description-single">
                                    <div className="description-a"><p>{description_a}</p></div>
                                    <div className="description-b"><p>{description_b}</p></div>
                                    <div className="description-c">
                                        <div className="duration">
                                                  <h2>Duration</h2>
                                                  <p>{Duration}</p>
                                        </div>
                                        <div className="group-size">
                                        <h2>Group Size</h2>
                                        <p>{Group_Size}</p>
                                        </div>
                                    </div>
                                    <div  className="price-and-book">
                                           <div className="price">     
                                        <h1>{price}</h1>
                                        </div>
                                        <div className="book">
                                        
                                        </div>
                                       
                                    </div>
                              </div>
                    </div> */}
                    </div>
            );

}
export default Single_tour;