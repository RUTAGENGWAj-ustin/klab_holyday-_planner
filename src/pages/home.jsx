import React from "react";
import { useState,useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../Api/api";
import {FaStar}  from "react-icons/fa";


const Home = () => {



    

        // const {posts} = AppProvider;
       const [posts,setPosts] = useState([])
      
        // const { data ,isLoading,isError} = useQuery({
        //   queryKey: ["tours"],
        //   queryFn: async () => {
        //     const res = await Axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour/')
        //     console.log(res)
        //     setPosts(res.data)
        //     return res.data;
        //   },
        
        // });
        // if (isError) {
        //   return<h1>Sorry there is an Error</h1>
        // }
        // if (isLoading) {
        //   return<h1>loading...</h1>
        // }
      
      
            
      
      
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
                    <div>
                          <section className="slaides">
                             <div className="container">
                             <button class="slide-arrow prev-arrow"><span>Prev</span></button>

                             <div className="txd">
                              <img src="houses.jpg" alt=""  className="image_scrool"/>
                              <div className="content">
                              
                                    <h1 class="h1-title">Life is Short and </h1>
                                    <h1 class="h1-title"><span>The World is Wide.</span></h1>
                                    <p>A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>
                                
                              </div>
                             </div>
                             <button class="slide-arrow prev-Next"><span>Next</span></button>
                             </div>
                              
                              
                              </section >
                              <div className="bannerform-1">
                              <div class="banner-form">
                            <form className="formxxx">
                                <div className="input-col wow fadeup-animation" >
                                    <span className="form-control-span where-wrap">
                                        <span className="icon"><i class="fas fa-map-marker-alt" ></i></span>
                                    <input type="text" class="form-input" placeholder="Where To?"/>
                                    </span>
                                </div>
                                <div className="input-col wow fadeup-animation" >
                                    <span className="form-control-span when-wrap">
                                        <span className="icon"></span>
                                    <select class="form-input">
                                            <option>When?</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                    <span className="arrow"></span>
                                    </span>
                                </div>
                                <div className="input-col wow fadeup-animation" > 
                                                                    
                                    <span className="form-control-span travel-wrap">
                                        <span className="icon"></span>
                                    <select className="form-input">
                                            <option>Travel Type</option>
                                            <option>Cultural</option>
                                            <option>Adventure</option>
                                            <option>Historical</option>
                                            <option>Seaside</option>
                                            <option>Discovery</option>
                                        </select>
                                    <span className="arrow"></span>
                                    </span>
                                </div>
                                <div className="input-col button-col wow fadeup-animation" >
                                    <span className="form-control-span button-wrap">
                                        <button className="sec-btn"><span>Find Now</span></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        </div>
<section className="section about">
<div class="logo-icon">
            <img src="logo-icon.svg" alt="logo-icon"/>
        </div>
                              <div className="row">
                    <div className="col-lg-6">
                        <div className="about-image-wp">
                            <div className="about-image-box big wow right-animation" >
                                <div className="about-image back-image" ></div>
                            </div>
                            <div className="about-image-box small wow fadeup-animation" >
                                <div className="about-image back-image"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content wow left-animation" >
                            <div className="line-title">
                                <h4 className="h4-title">About us</h4>
                            </div>
                            <h2 className="h2-title">Plan Your <span>Trip</span> with <span>Us</span></h2>
                            <div className="about-content-text">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
                                    river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
                                    about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
                            </div>
                            <a href="about.html" title="Read More" className="sec-btn"><span>Read More</span></a>
                        </div>
                    </div>
                </div>
 </section> 
                                    <section className="section">
                                             <div className="containero">
                                                <div className="min_container">
                                                    <div className="line-title"><h4 class="h4-title">Amazing Destination</h4></div>
                                                    
                                                    <h2 class="h2-title">Choose The <span>Destination</span> Just Right For <span>Your Vacation</span></h2>
                                                    
                                                </div>
    <div className="fadeup-animation " >
                    <div className="col-lg-8">
                        <div className="destination-box">
                            <a href="destination-detail.html">
                                <div className="destination-box-image-wp">
                                    <div className="destination-box-image back-image"  ></div>
                                </div>
                                <div class="destination-box-content">
                                    <div className="destination-box-content-inner">
                                        <h3 className="h3-title">Greece</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="row n">
                            <div className="col-lg-6">
                                <div className="destination-box">
                                    <a href="destination-detail.html">
                                        <div className="destination-box-image-wp">
                                            <div className="destination-box-image back-image" ></div>
                                        </div>
                                        <div className="destination-box-content">
                                            <div className="destination-box-content-inner">
                                                <h3 className="h3-title">Thailand</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="destination-box">
                                    <a href="destination-detail.html">
                                        <div className="destination-box-image-wp">
                                            <div className="destination-box-image back-image" ></div>
                                        </div>
                                        <div className="destination-box-content">
                                            <div className="destination-box-content-inner">
                                                <h3 className="h3-title">Switzerland</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="destination-box big-height">
                            <a href="destination-detail.html">
                                <div className="destination-box-image-wp">
                                    <div className="destination-box-image back-image b" ></div>
                                </div>
                                <div className="destination-box-content">
                                    <div className="destination-box-content-inner">
                                        <h3 className="h3-title">India</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                        <div class="destination-see-more">
                            <a href="destination.html" title="See More" class="sec-btn"><span>View All</span></a>
                        </div>
                    </div>
                </div>
    </section>
     <section className="section">
                                    <div className="containero">
                                                <div className="min_container">
                                                    <div className="line-title"><h4 class="h4-title">Amazing Tours</h4></div>
                                                    
                                                    <h2 class="h2-title">Trending,  <span> Best Selling Tours</span> And Fun  <span>Destinations</span></h2>
                                                    
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
                </section>
                <section className="main-testimonial">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-lg-5">
                    <div className="testimonial-left-side pt-70 wow right-animation" >
                        <div className="sec-title">
                            <div className="line-title">
                                <h4 className="h4-title">Testimonials</h4>
                            </div>
                            <h2 className="h2-title">Customer <span>Reviews</span></h2>
                        </div>
                        <div className="testimonial-quote">
                            <img src="/testimonial-quote.svg" alt="testimonial-quote"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="testimonial-right-side wow left-animation" >
                        <div className="testimonial-slider slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div class="slick-track" >
                        <div className="testimonial-slide slick-slide slick-cloned"  style={{width: '480px'}}>
                        {/* data-slick-index="5" id="" aria-hidden="true" tabindex="-1" */}
                                <div className="testimonial-stars">
                                    <FaStar className="i"/>
                                    <FaStar className="i"/>
                                    <FaStar className="i"/>
                                    <FaStar className="i"/>
                                    <FaStar className="i"/>
                                </div>
                                <div className="overflow-text">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                                <div className="testimonial-name">
                                    <h3 className="h3-title">Mathew A. Stephenson</h3>
                                    <p className="rated">Rated by travelers on twitter</p>
                                </div>
                            </div>
                            </div>
                            </div>

                            

                            
                        <ul className="slick-dots" >
                        {/* role="tablist" */}
                            <li className="" >
                                <button type="button"  id="slick-slide-control30" >1</button>
                                {/* role="presentation" role="tab" aria-controls="slick-slide30" aria-label="1 of 3" tabindex="-1" */}
                                </li>
                                <li role="presentation" class="">
                                    <button type="button"  id="slick-slide-control31" >2</button>
                                    {/* role="tab" aria-controls="slick-slide31" aria-label="2 of 3" tabindex="0" aria-selected="true" */}
                                    </li>
                                    <li role="presentation" class="slick-active">
                                        <button type="button"  id="slick-slide-control32" >3</button>
                                        {/*  role="tab" aria-controls="slick-slide32" aria-label="3 of 3" tabindex="-1" */}
                                        </li>
                                        </ul>
                                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                    </div>
          );
}
export default Home;
