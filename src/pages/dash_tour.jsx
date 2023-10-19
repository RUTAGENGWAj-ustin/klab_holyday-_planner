import React from "react";
import Tours from "./list-of-all-tour-arr";

const Dash_tour = () =>{
return(
          <div>
          {Tours.map((item, index) => (
                    <div className="tour-card dash">
                              <div className="card-img-img">
                                        <img src={item.image} alt="" />
                              </div>
                              <div className="card-name-name">
                                        <h1>{item.name}</h1>
                              </div>
                              <div className="all-description-dash">
                                    <div className="description-a"><p>{item.description_a}</p></div>
                                    <div className="description-b"><p>{item.description_b}</p></div>
                                    <div className="description-c">
                                        <div className="duration">
                                                  <h2>Duration</h2>
                                                  <p>{item.Duration}</p>
                                        </div>
                                        <div className="group-size">
                                        <h2>Group Size</h2>
                                        <p>{item.Group_Size}</p>
                                        </div>
                                    </div>
                                    <div  className="price-and-book">
                                           <div className="price">     
                                        <h1>{item.price}</h1>
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
