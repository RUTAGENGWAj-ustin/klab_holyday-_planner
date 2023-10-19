import React from "react";
import Tours from "./list-of-all-tour-arr";


const Tour_List = () =>{
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
                                                                      {Tours.map((item, index) => (
                                                                                <div className="tour-card">
                                                                                          <div className="card-img">
                                                                                                    <img src={item.image} alt="" />
                                                                                          </div>
                                                                                          <div className="card-name">
                                                                                                    <h1>{item.name}</h1>
                                                                                          </div>
                                                                                          <div className="all-description">
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
                                                                                                    <a href={`/Tour_list/${item.id}`}>book now</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                          </div>
                                                                                </div>
                                                                                ))}
                                                                                </div>             
                                                  </div>
                                                  <div className="list-of-all-tour-right-side">

                                                  </div>
                                        </div>
                              </div>
                        </section>
                    </div>
                    </>
          );
}
export default Tour_List;