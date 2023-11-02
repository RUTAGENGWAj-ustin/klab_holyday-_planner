import React from "react";
import {BsFillPersonFill} from "react-icons/bs";
import {AiTwotonePhone} from "react-icons/ai";
import {FaEnvelope,FaBook} from"react-icons/fa";
import { useState } from "react";
import axios from "axios";
import {  Report} from "notiflix"

const Contact = () =>{
    const [FullName,setFillname] = useState()
    const [Phone,setPhane] = useState()
    const [Email,setEmail] = useState()
    const [massage,setMassage] = useState()

    const onSend = async (e)=> {
        e.preventDefault();
    let sendEmail = {
        name:FullName,
        phone:Phone,
        email:Email,
        message:massage,
    }
    console.log(sendEmail)

    try {
       const response = await axios.post('https://holiday-planner-4lnj.onrender.com/api/v1/contact/submit',sendEmail).then(()=>{
       
       Report.success(
        'Massage sent Success',
        '"thanks." <br/>dddddd<br/>',
        'Okay',
        );
       
       });
       window.location.reload()
       console.log("weeeeeeeeeeeeeeeeeee:",response.data);
   
     } catch(err){
       if(err.response){
 console.log(err.response.data.massage);
 console.log(err.response.status);
 console.log(err.response.headers);
       }
       else{
             console.log(data);
         console.log(`Error:${err.message}`);
       }
    }
     }
          return(
                    <>
                    <div className="contact">
                    <section className="main-banner inner-banner overlay back-image">
        <div className="sec-wp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-content wow fadeup-animation" >
                            <h1 className="h1-title">Contact us</h1>
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
                      <form action="" method="POST" onSubmit={onSend}>
                         <div className="top-form">
                              <div className="top-form-left">
                                      <div className="in">
                                        <span className="icon"><BsFillPersonFill/></span>
                                        <input 
                                        type="text" 
                                        placeholder="Full Name *" 
                                        required="" 
                                        className="form-input"
                                        value={FullName}
                                        onChange={(e) => setFillname(e.target.value)}
                                        />
                                      </div>  
                                      <div className="in">
                                        <span className="icon"><AiTwotonePhone/></span>
                                        <input type="text" 
                                        placeholder="Phone *" 
                                        required="" 
                                        className="form-input"
                                        value={Phone}
                                        onChange={(e) => setPhane(e.target.value)}
                                        />
                                      </div>  
                              </div>
                              <div className="top-form-right">
                              <div className="in">
                                        <span className="icon"><FaEnvelope/></span>
                                        <input type="text" 
                                        placeholder="Email *" 
                                        required="" 
                                        className="form-input"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                      </div>  
                                      <div className="in">
                                        <span className="icon"><FaBook/></span>
                                        <input 
                                        type="text" 
                                        placeholder="Services *" 
                                        required="" 
                                        className="form-input"
                                        value={massage}
                                        onChange={(e) => setMassage(e.target.value)}
                                        />
                                      </div>  
                              </div>
                              
                         </div>
                         <div className="bottom-form">
                              <textarea name="massege" id="" cols="30" rows="10" placeholder="Massage"></textarea>
                              <button className="form-contact-botton"><span>submit</span></button>
                         </div>
                      </form>
                      </div>
               </div>
               <div className="right-side">
                    <div className="right-side-top">
               <div className="line-title">
                                <h4 className="h4-title">Why Book With Us?</h4>
                            </div>
                            <ul className="book-with-list">
                                <li>Best Price Guarantee</li>
                                <li>Customer care available 24/7</li>
                                <li>Free Travel Insureance</li>
                                <li>Hand-picked Tours &amp; Activities</li>
                            </ul>
               </div>
               <div className="right-side-bottom">
               
                            <div className="line-title">
                                <h4 className="h4-title">Get a Question?</h4>
                            </div>
                            <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                            <ul className="gaq-list-item">
                                <li>
                                    <a href="mailto:holidayplanners@gmail.com" title="holidayplanners@gmail.com">
                                        <i className="fas fa-envelope" aria-hidden="true"></i> holidayplanners@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1234567890" title="+123 456 7890">
                                        <i className="fas fa-phone-alt" aria-hidden="true"></i> +123 456 7890
                                    </a>
                                </li>
                            </ul>
                       
               </div>
               </div>
          </div>
       </div>
    </section>

    {/* <section className="map-section">
          <div className="map-div-section">
                    <div className="left-map-container">
                              <div>
                                        <div class="contact-box">
                            <div className="line-title">
                                <h4 className="h4-title">India Office</h4>
                            </div>
                            <ul>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span className="icon"></span> 54, Beside Shoping Mall, Gujarat.
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1234567890" title="+123 456 7890">
                                        <span className="icon"></span> +123 456 7890
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:holidayplanners@gmail.com" title="holidayplanners@gmail.com">
                                        <span className="icon"></span> holidayplanners@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <div className="contact-box">
                            <div className="line-title">
                                <h4 className="h4-title">Usa Office</h4>
                            </div>
                            <ul>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span className="icon"></span> 888 S Greenville, TX 75081, United States.
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1234567890" title="+123 456 7890">
                                        <span className="icon"></span> +123 456 7890
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:holidayplannersusa@gmail.com" title="holidayplannersusa@gmail.com">
                                        <span className="icon"><i class="fas fa-at" aria-hidden="true"></i></span> holidayplannersusa@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                        </div>
                              <div>
                              <div className="contact-box">
                            <div className="line-title">
                                <h4 className="h4-title">Victoria Office</h4>
                            </div>
                            <ul>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span className="icon"></span> Main Street, Victoria 8007.
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1234567890" title="+123 456 7890">
                                        <span className="icon"></span> +123 456 7890
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:holidayplannersvic@gmail.com" title="holidayplannersvic@gmail.com">
                                        <span className="icon"></span> holidayplannersvic@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                              </div>
                             
                    </div>
                    <div className="right-map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214554.14066772402!2d-96.94818381851621!3d32.83443552723513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f9c41935363%3A0xa2fb29edb2384fae!2sUS%20Tours%20%26%20Travel%20Corp!5e0!3m2!1sen!2sin!4v1629182421020!5m2!1sen!2sin" width="100" height="100"  allowFullScreen="" loading="lazy"></iframe>
                    </div>
          </div>
    </section> */}



    
                    </div>
                    </>
          );
}
export default Contact;