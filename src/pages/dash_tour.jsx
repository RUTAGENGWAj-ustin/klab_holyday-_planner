import React from "react";
import Tours from "./list-of-all-tour-arr";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Dash_tour = () =>{



    const [posts,setPosts] = useState([]);


    const { data ,isLoading,isError} = useQuery({
      queryKey: ["tours"],
      queryFn: async () => {
        const res = await Axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour/')
        console.log(res.data)
        setPosts(res.data)
        return res.data;
      },
    
    });
    if (isError) {
      return<h1>Sorry there is an Error</h1>
    }
    if (isLoading) {
      return<h1>loading...</h1>
    }
  
    // destination
    // backdropImage
    // Title
    // Description
    // Duration
    // Group size
    // Price
    // Discount: percentage
    // Tour type
    // Departure
    // Seats
    // fromMonth
    // toMonth
    // departureTime 
    
return(
    
          <div>
            
          {posts.map((item, index) => (
                    <div className="tour-card dash">
                              <div className="card-img-img">
                                        <img src={item.backdropImage} alt="" />
                              </div>
                              <div className="card-name-name">
                                        <h1>{item.Title}</h1>
                              </div>
                              <div className="all-description-dash">
                                    <div className="description-a"><p>{item.Description}</p></div>
                                    <div className="description-b"><p>{item.destination}</p></div>
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
                                        <h1>{item.Price}</h1>
                                        </div>
                                        <div className="book">
                                        <a href="http://">Edit</a>
                                        </div>
                                        <div className="book">
                                        <a href="http://">Delete</a>
                                        </div>
                                    </div>
                              </div>
                    </div>
                    ))}   
                    </div>
);
}
export default Dash_tour
