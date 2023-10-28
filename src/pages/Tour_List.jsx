import React from "react";
import { useState,useEffect } from "react";
import Tours from "./list-of-all-tour-arr";
import api from "../Api/api";

import {BsFillPersonFill} from "react-icons/bs";
import {AiTwotonePhone} from "react-icons/ai";
import {FaEnvelope,FaBook} from"react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
// import AppProvider from "./AppProvider";

const Tour_List = () =>{

  // const {posts} = AppProvider;
 const [posts,setPosts] = useState([])

  // // const { data ,isLoading,isError} = useQuery({
  // //   queryKey: ["tours"],
  // //   queryFn: async () => {
  // //     const res = await Axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour/')
  // //     console.log(res)
  // //     setPosts(res.data)
  // //     return res.data;
  // //   },
  
  // // });
  // // if (isError) {
  // //   return<h1>Sorry there is an Error</h1>
  // // }
  // // if (isLoading) {
  // //   return<h1>loading...</h1>
  // // }


      


      useEffect(() => {
        const fetchapi = async () => {
          try {
            const response = await api.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour/');
            setPosts(response.data);  
          } catch(err){
            if(err.response){
      console.log(err.response.data.massage);
      console.log(err.response.status);
      console.log(err.response.headers);
            }
            else{
                  console.log("wwe");
                  console.log(posts);
              console.log(`Error:${err.message}`);
            }
          }
        }
        fetchapi();
       
      },[])


          return(
                    <>
                    <div> <section className="title-of-tour">
                              <div className="title-of-tour-img"><img src="/tour-banner.jpg" alt="" />
                              </div>
                              <div  className="title-of-tour-headdd"><h1>Tour List</h1></div>
                        </section>
                        <section className="list-of-all-tour">
                              <div className="list-of-all-tour-big">
                                        <div className="list-of-all-tour-small">
                                                  <div className="list-of-all-tour-left-side">
                                                             <div className="list-of-all-tour-form1">
                                                                      <form action="">
                                                                                <div className="tour-form-l">
                                                                      <label className="tour-form-l-sel-leb-text">Sort by :</label>
                                                                      </div>
                                                                      <div className="tour-form-l">
                                                                      <select  className="tour-form-l-sel">
                                                                       <option selected="" >Release Date</option>
                                                                          <option>Tour Date</option>
                                                                          <option>Title</option>
                                                                          <option>Price</option>
                                                                          <option>Popularity</option>
                                                                          <option>Rating</option>
                                                                          <option>Duration</option>
                                                                        </select>
                                                                      </div>
                                                                      <div className="tour-form-l">
                                                                      <select className="tour-form-l-sel" >
                                                                        <option>Ascending</option>
                                                                        <option selected="">Descending</option>
                                                                      </select>
                                                                      </div>
                                                                      </form>
                                                                      </div>
                                                                      <div className="list-of-all-tour-card">
                                                                      {posts.map((item, index) => (
                                                                                <div className="tour-card">
                                                                                          <div className="card-img">
                                                                                                    <img src={item.backdropImage} alt="" />
                                                                                          </div>
                                                                                          <div className="card-name">
                                                                                                    <h1>{item.Title}</h1>
                                                                                          </div>
                                                                                          <div className="all-description">
                                                                                                <div className="description-a"><p>{item.Description}</p></div>
                                                                                                <div className="description-b"><p>{item.description_b}</p></div>
                                                                                                <div className="description-c">
                                                                                                    <div className="duration">
                                                                                                              <h2>Duration</h2>
                                                                                                              <p>{item.Duration}</p>
                                                                                                    </div>
                                                                                                    <div className="group-size">
                                                                                                    <h2>Group Size</h2>
                                                                                                    <p>{item.GroupSize}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div  className="price-and-book">
                                                                                                       <div className="price">     
                                                                                                    <h1>{item.price}</h1>
                                                                                                    </div>
                                                                                                    <div className="book">
                                                                                                    <a href={`/Tour_list/${item.Title}`}>book now</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                          </div>
                                                                                </div>
                                                                                ))}
                                                                                </div>             
                                                  </div>
                                                  <div className="list-of-all-tour-right-side">
                                                  <form action="" className="booking-form">
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
                      {/* <div className="right-side-top x">
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
                       
               </div> */}
                                                  </div>
                                        </div>
                              </div>
                        </section>
                    </div>
                    </>
          );
}
export default Tour_List;